export default function InputRadio(props){
    return props.options.map(function(option){
        return <label><input type="radio" value={option.value} name={props.name} /> {option.name}</label>
    })
}