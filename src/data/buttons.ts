type action = {
  name: string;
  color: 'primary' | 'secondary' | 'success';
  xs: 3 | 6;
};
const primary = 'primary';
const secondary = 'secondary';
const success = 'success';

export const buttons: action[] = [
  { name: 'AC', color: secondary, xs: 3 },
  { name: '+/-', color: secondary, xs: 3 },
  { name: '%', color: secondary, xs: 3 },
  { name: '/', color: secondary, xs: 3 },

  { name: '7', color: primary, xs: 3 },
  { name: '8', color: primary, xs: 3 },
  { name: '9', color: primary, xs: 3 },
  { name: 'x', color: secondary, xs: 3 },

  { name: '4', color: primary, xs: 3 },
  { name: '5', color: primary, xs: 3 },
  { name: '6', color: primary, xs: 3 },
  { name: '-', color: secondary, xs: 3 },

  { name: '1', color: primary, xs: 3 },
  { name: '2', color: primary, xs: 3 },
  { name: '3', color: primary, xs: 3 },
  { name: '+', color: secondary, xs: 3 },

  { name: '0', color: primary, xs: 6 },
  { name: ',', color: secondary, xs: 3 },
  { name: '=', color: success, xs: 3 },
];
