
import{useState}from"react";
function Login2(){
    const[input1,setInput1]=useState();
    const[input2,setInput2]=useState();
    const[email,setEmail]=useState(0);
    const[password,setPassword]=useState(0);

    function name(){
        setEmail(input1);
        setPassword(input2);
    }


    return<>
    <h1>Login</h1>
        <input onChange={(event)=>{setInput1(event.target.value);}} type={"text"} name={"email"}/><br/>
     <input onChange={(event)=>{setInput2(event.target.value);}} type="password" /><br/>
    <input type="button" value={"submit"} onClick={(event)=>{name()}} /><br/>

    Email:{email}<br/>
    Password:{password}<br/>

        </>
}



export default Login2;