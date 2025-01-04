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
import AirIcon from '@mui/icons-material/Air';

function Component6(){
    let arr=[{name:"Mumbai",temp:"25C",wind:"1.3kmph"},{name:"Nagpur",temp:"28C",wind:"1.4kmph"},{name:"Pune",temp:"30C",wind:"1.45kmph"},{name:"Wardha",temp:"33C",wind:"1.5kmph"},{name:"Amravati",temp:"35C",wind:"1.32kmph"},{name:"Akola",temp:"36C",wind:"1.2kmph"}]
    return <>
    <Container sx={{margin:10}}>
        <Grid2 container spacing={10}>
            {arr.map((val,index)=>{
                return<Grid2 item size={{xs:6,md:4}}>
            <Card sx={{minWidth:275,backgroundColor:"aqua"}}>
            <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          City
        </Typography>
        <Typography variant="h5" component="div">{val.name}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{val.temp}</Typography>
        <Typography variant="body2">
         {val.wind}
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Sunny Day</Button>
        <WbSunnyIcon style={{color:"yellow"}}/>
        <AirIcon/>
      </CardActions>
    </Card>
    </Grid2>
})}

        </Grid2>
        </Container>

    </>


    



    

}


export default Component6;