import * as React from 'react';
import { Container } from '@mui/material';
import Card from'./Card';

import { Grid2 }from'@mui/material';

function Comp1(){
    return (
        <>
        <Container maxWidth="1g">
        <Grid2 Container spacing={5} style={{marginTop:"20px"}}>
            <Grid2 item xs={4}>
             <Card/>
            </Grid2>
            <Grid2 item xs={4}>
             <Card/>
            </Grid2>
            <Grid2 item xs={4}>
             <Card/>
            </Grid2>
            
                
        </Grid2>
        </Container>
        </>
    )


    



    
    

    
    



    
}
export default Comp1;