import {useState,useEffect}from'react';
function Component13(){
    const[arr,setArr]=useState([]);
    const[arr2,setArr2]=useState([]);

    useEffect(()=>{
        console.log("I am in useEffect");
        arr.push("Nagpur")
        arr.push("Pune")
        setArr([...arr])
        console.log(arr)
    },[]);
    return<>
    <h2>input:<input onChange={(event)=>{setArr2(event.target.value)}}/></h2>
    <button onClick={()=>{
        console.log(arr2);
        arr.push(arr2);
        console.log(arr)
        setArr([...arr])
    }}>Add</button>

    {arr.map((val)=>{
        return<>
        {val}<br></br>
        </>
    })}
    </>
    

}
export default Component13;