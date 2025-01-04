import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item><Button variant="text">Text</Button></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><Button variant="contained">Contained</Button></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><Button variant="outlined">Outlined</Button></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><Button variant="contained">Contained</Button></Item>
        </Grid>
      </Grid>
    </Box>
  );
}