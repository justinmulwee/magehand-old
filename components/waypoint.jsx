import Block from './block';
import Link from 'next/link'
import InputRadio from './inputRadio';
import React, {useState, useContext} from 'react';
import VarsContext from "../modules/varsContext"

export default function Waypoint({blocks}){
    const [remainingBreaks, setRemainingBreaks] = useState(0);
    const components = [];
    let unrenderedBreaks = remainingBreaks+1;
    const vars = useContext(VarsContext);
    console.log(vars);

    function renderBlocks(blocks){
        for(let block of blocks){
            if(block.type === 'paragraph'){
                components.push(<Block text={block.text} />);
            }
            else if(block.type === 'input_radio'){
                components.push(<InputRadio options={block.options} name={block.name} />);
            }
            else if(block.type === 'if'){
                const currentVar = vars.find(function(variable){
                    if(variable.name === block.variableName) {
                        return variable;
                    }
                });
                if(block.operator === 'is'){
                    if(currentVar.value === block.value){
                        renderBlocks(block.then);
                    } else {
                        console.log("its not");
                    }
                }
            }
            else if(block.type === 'heading'){
                components.push(<h1>{block.text}</h1>)
            }
            else if(block.type === 'soft_break'){
                unrenderedBreaks -= 1;
                if(unrenderedBreaks === 0){
                    components.push(
                    <button onClick={() => setRemainingBreaks(remainingBreaks+1)}>
                        {block.text}
                    </button>
                    );
                    break;
                }
            }
            else if (block.type === 'waypointLink'){
                console.log(block);
                components.push(<Link href="/waypoint/[id]" as={`/waypoint/${block.slideNumber}`}>{block.text}</Link>)
            }
        }
    }

    renderBlocks(blocks);
    
    return components;
}