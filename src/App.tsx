import { Card, Grid, CardContent } from '@mui/material';
import React, { MouseEvent, useState } from 'react';
import './App.css';
import CButton from './components/CButton';
import Output from './components/Output';
import { buttons } from './data/buttons';

function App() {
  const [result, setResult] = useState('0');

  const clickHandle = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setResult(prevResult => prevResult + event.currentTarget.innerText);
  };

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
            <Output value={result} />
          </Grid>
          {buttons.map(button => (
            <CButton
              key={button.name}
              name={button.name}
              color={button.color}
              xs={button.xs}
              clickHandle={clickHandle}
            />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default App;
