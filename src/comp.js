import{useState}from"react";
function Comp(){
    const[input,setInput]=useState();

    function name(){
    }

    return<>
    <input onChange={(event)=>{setInput(event.target.value);}}/><br/>
    <input type="button" value={"submit"}onClick={(event)=>{name()}}/><br/>
    Result:{result}<br/>
    </>
}

export default Comp;