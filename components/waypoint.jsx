import Block from './block'
import InputRadio from './inputRadio'

export default function Waypoint(props){
    return props.blocks.map(function(block){
        if(block.type === 'paragraph'){
            return <Block text={block.text} />
        }
        else if(block.type === 'input_radio'){
            return <InputRadio options={block.options} name={block.name} />
        }
        else if(block.type === 'if'){

        }
        else if(block.type === 'heading'){

        }
        else if(block.type === 'soft_break'){
            
        }
        else if(block.type === 'input_radio'){

        }
    })
}