import { Typography } from '@mui/material';
import React from 'react';

type OutputProps = {
  value: string;
};

const Output = ({ value }: OutputProps) => {
  return (
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
      {value}
    </Typography>
  );
};

export default Output;
