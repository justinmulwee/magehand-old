import Block from './block';
import InputRadio from './inputRadio';
import React, {useState} from 'react';

export default function Waypoint(props){
    const [remainingBreaks, setRemainingBreaks] = useState(0);
    const components = [];
    let unrenderedBreaks = remainingBreaks+1;
    for(let block of props.blocks){
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
    }
    return components;
}