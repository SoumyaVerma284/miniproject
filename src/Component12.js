import{useState,useEffect}from 'react';
function Component12(){
    const[myarray,setMyarray]=useState([]);

    useEffect(()=>{
      const initialElement=[1,2,3,4];
      setMyarray(initialElement);
    },[]);
    return(
        <div>
        {myarray.map((element,index)=>(
            <p key={index}>{element}</p>

        ))}
        </div>
    );
        
    

}


export default Component12;
