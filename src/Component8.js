import {useState} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  Container from '@mui/material/Typography';
import { Grid2 } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import axios from'axios';
function Component8(){
  let age = 30;

  let arr = ["Mumbai", "Nagpur", "Pune", "Wardha"];

  const [cityData, setCityData] = useState([]);

  function callApi(){
      console.log("I am in call api");

      arr.map((val, inde)=>{
          console.log("val", val);


          axios.get("https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=65302b86406160e5f170c650f23250d0&units=metric")
              .then((res)=>{ 
                  console.log("Result status", res.data);

                  cityData.push(res.data);
                  console.log("cityData", cityData);
                  setCityData([...cityData]);
              })
              .catch((err)=>{console.log("Error");})
          })
  }

  return  <>
  
  <Container sx={{margin: 10}}>
      <Grid2 spacing={10} container>


          {cityData.map((val, index)=>{
              return <Grid2 item size={ {xs:6, md: 4} } >
                      <Card sx={{ minWidth: 275 }}>
                          <CardContent>
                              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                              City
                              </Typography>
                              <Typography variant="h5" component="div">
                              {val.name}
                              </Typography>
                              <Typography sx={{ color: 'text.secondary', mb: 1.5 }}> {val.main.temp}C</Typography>
                              <Typography variant="body2">
                               {val.wind.speed}kmph
                              <br />
                              
                              </Typography>
                          </CardContent>
                          <CardActions>
                              <Button size="small">{val.weather[0]["description"]}</Button>


                              <WbSunnyIcon  style={{color: val.main.temp>28?"red":"green"}}/>

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


export default Component8;