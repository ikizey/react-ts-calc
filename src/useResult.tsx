import { useReducer } from 'react';

const initialResult = '0';

const evaluate = (formula: string) => {
  if (formula.endsWith('-')) {
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

      if (state === '-') {
        return '0 ' + action + ' ';
      }
      if (state.endsWith(' -')) {
        return state.slice(0, -4) + ' ' + action + ' ';
      }
      if (state.endsWith(' ')) {
        return state.slice(0, -3) + ' ' + action + ' ';
      }
      if (state.endsWith(' 0.')) {
        return state.slice(0, -5) + ' ' + action + ' ';
      }
      if (state.endsWith('.')) {
        return state.slice(0, -1) + ' ' + action + ' ';
      }
      if (state.split(' ').length === 3) {
        return evaluate(state) + ' ' + action + ' ';
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

export const useResult = () => {
  return useReducer(resultReducer, '0');
};
