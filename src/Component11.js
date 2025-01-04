import{useState,useEffect}from 'react';
function Component11(props){
    const[name,setName]=useState();
    const[age,setAge]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[city,setCity]=useState();

    useEffect(()=>{
        console.log("I am in useEffect");
    },[name,password]);
    return<>
    Name:<input onChange={(event)=>{setName(event.target.value);}}/>
    {name}
    Age:<input onChange={(event)=>{setAge(event.target.value);}}/>
    {age}
    Email:<input onChange={(event)=>{setEmail(event.target.value);}}/>
    {email}
    Password:<input onChange={(event)=>{setPassword(event.target.value);}}/>
    {password}
    City:<input onChange={(event)=>{setCity(event.target.value);}}/>
    {city}

    </>

}
export default Component11;