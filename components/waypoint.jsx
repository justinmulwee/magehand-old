import Block from './block'
import InputRadio from './inputRadio'

export default function Waypoint(props){
    const components = [];
    let remainingBreaks = props.softBreaks
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

        }
        else if(block.type === 'soft_break'){
            remainingBreaks -= 1;
            components.push(<button>{block.text}</button>);
            if(remainingBreaks === 0){
                break;
            }
        }
        else if(block.type === 'input_radio'){

        }
    }
    return components;
}