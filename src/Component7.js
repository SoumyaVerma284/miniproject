import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container }from '@mui/material/Typography';
import { Grid2 } from '@mui/material';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

function Component7(){
    return (
        <Grid2 container spacing={2}>
            <Grid2 item size ={{xs:12,sm:6,md:4}}>
            <Card sx={{minWidth:200, backgroundColor:"aqua",marginTop:3}}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Hello
        </Typography>
        <Typography variant="h5" component="div">
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}></Typography>
        <Typography variant="body2">
    
          <br />
          {'"React"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Text1</Button>
      </CardActions>
    </Card>
            </Grid2>
            <Grid2 size={{xs:12,sm:6,md:4}}>
            <Card sx={{ minWidth:200,backgroundColor:"aqua",marginTop:3 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Hello World
        </Typography>
        <Typography variant="h5" component="div">
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}></Typography>
        <Typography variant="body2">
    
          <br />
          {'"React"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Text2</Button>
      </CardActions>
    </Card>
            </Grid2>
            <Grid2 size={{xs:12,sm:6,md:4}}>
            <Card sx={{ minWidth: 200 ,backgroundColor:"aqua",marginTop:3 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Hello React
        </Typography>
        <Typography variant="h5" component="div">
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}></Typography>
        <Typography variant="body2">
    
          <br />
          {'"React"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Text3</Button>
      </CardActions>
    </Card>
            </Grid2>
            
                
        </Grid2>
    )


    


    

}
export default Component7;