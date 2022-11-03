import { Button, Card, Grid, Typography, CardContent } from '@mui/material';
import React from 'react';
import './App.css';

function App() {
  return (
    <Card
      sx={{
        width: 300,
        marginY: 0,
        marginX: 'auto',
        marginTop: 20,
      }}
    >
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: '24px',

                fontWeight: 700,
                padding: 1,
                border: '1px solid #1976d2',
                borderRadius: '10px',
              }}
              align='right'
              noWrap={true}
            >
              0
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' color='warning' fullWidth>
              AC
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' color='secondary' fullWidth>
              +/-
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' color='secondary' fullWidth>
              %
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' color='secondary' fullWidth>
              /
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' fullWidth>
              9
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' fullWidth>
              8
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' fullWidth>
              7
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' color='secondary' fullWidth>
              x
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' fullWidth>
              6
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' fullWidth>
              5
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' fullWidth>
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' color='secondary' fullWidth>
              -
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' fullWidth>
              3
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' fullWidth>
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' fullWidth>
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' color='secondary' fullWidth>
              +
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant='contained' fullWidth>
              0
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' fullWidth>
              ,
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' color='success' fullWidth>
              =
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default App;
