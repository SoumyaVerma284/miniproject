import { useState } from "react";
import Button from '@mui/material/Button';
import { Box, Chip, Container, Grid2, Stack } from "@mui/material";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness4Icon from '@mui/icons-material/Brightness4';


import axios from 'axios';


function Component9(){


    const [temp, setTemp] = useState(0);
    const [wind, setWind] = useState(0);

    let arr = [{name: "Mumbai", temp: "25C", wind:"1.3kmph"}, {name: "Nagpur", temp: "35C", wind:"1.45kmph"}, {name: "Pune", temp: "27C", wind:"2.3kmph"}, {name: "Wardha", temp: "25C", wind:"1.8kmph"},{name: "Amaravati", temp: "30C", wind:"1.46kmph"}]

    function callApi(){
        console.log("I am in call api");


        axios.get("https://api.openweathermap.org/data/2.5/weather?q=Nagpur&appid=5dfe7ef8f92d44a1930bf7e6855d8533&units=metric")
             .then((res)=>{ 
                console.log("API CAlled", res);
                console.log("Result status", res.data.wind.speed);

                setTemp(res.data.main.temp)
                setWind(res.data.wind.speed)
            
            })
             .catch((err)=>{console.log("Error");})
    }

    return  <>
    
    <Container sx={{margin: 10}}>
        <Grid2 spacing={10} container>


            {arr.map((val, index)=>{
                return <Grid2 item size={ {xs:6, md: 4} } >
                        <Card sx={{ minWidth: 275,backgroundColor:"pink" }}>
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                City
                                </Typography>
                                <Typography variant="h5" component="div">
                                {val.name}
                                </Typography>
                                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{temp} C</Typography>
                                <Typography variant="body2">
                                {wind} kmph
                                <br />
                                
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Sunny Day</Button>


                                <WbSunnyIcon  style={{color: temp>25?"red":"green"}}/>

                                <Brightness4Icon />
                            </CardActions>
                        </Card>
                    </Grid2>
            })}

            

        </Grid2>

        <Button variant="contained" onClick={(event)=>{ callApi(); }} >Call API</Button>
        </Container>
</>

    
}

export default Component9;