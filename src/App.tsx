import { Card, Grid, CardContent } from '@mui/material';
import React, { MouseEvent, useReducer } from 'react';
import './App.css';
import CButton from './components/CButton';
import Output from './components/Output';
import { buttons } from './data/buttons';

const initialResult = '0';

const evaluate = (formula: string) => {
  if (formula === '-') {
    return formula;
  }
  if (formula.endsWith(' ')) {
    return eval(formula.slice(0, -3)) + formula.slice(-3);
  }

  const temp = formula.replace('X', '*');

  if (eval(temp) === Infinity) {
    return '0';
  }
  return eval(temp).toString();
};

const resultReducer = (state: string, action: string) => {
  switch (action) {
    case 'AC': {
      return initialResult;
    }
    case '+':
    case '-':
    case '/':
    case 'X': {
      if (action === '-') {
        if (state === '0') {
          return action;
        } else if (
          state.split(' ').length === 3 &&
          state.split(' ').at(2) === ''
        ) {
          return state + action;
        } else if (state.endsWith('-')) {
          return state;
        }
      }

      if (state.split(' ').length === 3) {
        return evaluate(state) + ' ' + action + ' ';
      }

      if (state === '-') {
        return '0 ' + action + ' ';
      } else if (state.endsWith(' -')) {
        return state.slice(0, -4) + ' ' + action + ' ';
      } else if (state.endsWith(' ')) {
        return state.slice(0, -3) + ' ' + action + ' ';
      } else if (state.endsWith('.')) {
        return state.slice(0, -1) + ' ' + action + ' ';
      }

      return state + ' ' + action + ' ';
    }

    case '=':
      return evaluate(state);

    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0': {
      if (state === '0') {
        return action;
      }
      return state + action;
    }

    case '.': {
      const splitted = state.split(' ');
      if (
        (splitted.length === 1 && state.includes('.')) ||
        (splitted.length === 3 && splitted[2].includes('.'))
      ) {
        return state;
      } else if (state.endsWith(' ')) {
        return state + '0.';
      }
      return state + action;
    }
  }
  return state + action;
};

function App() {
  const [result, setResult] = useReducer(resultReducer, initialResult);

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
