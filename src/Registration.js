function Registration(){
    function submit(){
        console.log("I am in submit function");
    }
    return<>
    <h1>Registration Page</h1>
    <div style={{"margin":"10px",color:"red"}}>
        <div>
        <div>First name :<input onChange={(event)=>{console.log(event.target.value);}} type={"text"} name={"First name"} /></div>
        </div>
        <div>
        <div>Last name :<input type={"text"} name={"Last name"} /></div>
        </div>
        <div>Email:<input onChange={(event)=>{console.log(event.target.value);}}type={"text"} name={"email"}/> </div>
        </div>
        <div>
            <div>Age:<input type={"text"} name={"age"} /></div>
        </div>
        <div>
            <div>Password: <input type="password" /></div>
        </div>
        <div>
            <div>City:<input type={"text"} name={"city"} /></div>
        </div>
        <div>
            <div><input type="button" name="submit" value="submit" /></div>
        </div>
        </>
}



export default Registration;