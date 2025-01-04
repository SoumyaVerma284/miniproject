import { useState, useEffect } from "react";
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


function Component10(){

    const [cityData, setCityData] = useState([]);
    const [cityArr, setCityArr] = useState(["Mumbai", "Nagpur", "Pune", "Wardha"])
    const [cityName, setCityName] = useState();
      useEffect(()=>{
        console.log("I am in useEffect");
        callApi()
    }, [cityArr]);


    function callApi(){
        console.log("I am in call api");
        
        cityArr.map((val, index)=>{


            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=5dfe7ef8f92d44a1930bf7e6855d8533&units=metric`) 
                .then((res)=>{ 
                    console.log("Result status", res.data);

                    cityData.push(res.data);
                    setCityData([...cityData]);
                })
                .catch((err)=>{console.log("Error");})

        })

    }

    return <>
        
        <Container sx={{margin: 10}}>

            City Name: <input onChange={(event)=>{
                setCityName(event.target.value);
            }} />


            <Button onClick={()=>{
                console.log(cityName);
                cityArr.push(cityName)
                setCityArr([...cityArr])

            }} > Add </Button>
        <Grid2 spacing={10} container>


                {cityData.map((val, index)=>{
                    return <Grid2 item size={ {xs:12, md: 3} } >
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            {val.name}
                            </Typography>
                            <Typography variant="h5" component="div">
                            
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}> {val.main.temp}C</Typography>
                            <Typography variant="body2">
                             {val.wind.speed}kmph
                            <br />
                            
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"></Button>


                            <WbSunnyIcon style={{color: val.main.temp>28?"red":"green" }}  />

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
export default Component10;