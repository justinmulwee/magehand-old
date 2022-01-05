import Block from './block';
import Link from 'next/link'
import InputRadio from './inputRadio';
import React, {useState} from 'react';

export default function Waypoint({blocks}){
    const [remainingBreaks, setRemainingBreaks] = useState(0);
    const components = [];
    let unrenderedBreaks = remainingBreaks+1;
    for(let block of blocks){
        if(block.type === 'paragraph'){
            components.push(<Block text={block.text} />);
        }
        else if(block.type === 'input_radio'){
            components.push(<InputRadio options={block.options} name={block.name} />);
        }
        else if(block.type === 'if'){

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
        else if (block.type === 'choice'){
            console.log(block);
            components.push(<Link href="/waypoint/[id]" as={`/waypoint/${block.slideNumber}`}>{block.text}</Link>)
        }
    }
    return components;
}