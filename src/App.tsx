import { Card, Grid, CardContent } from '@mui/material';
import React, { MouseEvent } from 'react';
import './App.css';
import Output from './components/Output';
import Buttons from './components/Buttons';
import { useResult } from './hooks/useResult';

function App() {
  const [result, setResult] = useResult();

  const clickHandle = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setResult(event.currentTarget.innerText);
  };

  return (
    <Card
      sx={{
        width: 300,
        marginY: 0,
        marginX: 'auto',
        marginTop: '2rem',
      }}
    >
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Output value={result} />
          </Grid>
          <Buttons clickHandle={clickHandle} />
        </Grid>
      </CardContent>
    </Card>
  );
}

export default App;
