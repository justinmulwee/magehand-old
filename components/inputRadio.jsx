import VarsContext from "../modules/varsContext"
import {useContext} from "react"

export default function InputRadio(props){
    //if(props.variableName){
        //const {vars, setVars} = useContext(VarsContext);
        const vars = useContext(VarsContext);
        console.log(vars);
        const currentVar = vars.find(function(variable){
            if(variable.name === props.variableName) {
                return variable;
            }
        });
    //}

    return props.options.map(function(option){
        return (<label>
            <input type="radio" 
                value={option.value} 
                name={props.name} 
                onClick={function(){
                    console.log(option.value);
                    if(currentVar) {
                        const newVars = vars.map(function(variable){
                            if(variable.name === props.name){
                                variable.value = option.value;
                                return variable;
                            } else {
                                return variable;
                            }
                        });
                        console.log("new vars");
                        console.log(newVars);
                        //setVars(newVars);
                    }
                }} 
            /> 
            {option.name}
            </label>)
    })
}