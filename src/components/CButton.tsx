import { Button, Grid } from '@mui/material';
import React, { MouseEvent } from 'react';

type CButtonProps = {
  name: string;
  xs: number;
  color: 'primary' | 'secondary' | 'success';
  clickHandle: (event: MouseEvent<HTMLButtonElement>) => void;
};

const CButton: React.FC<CButtonProps> = ({
  name,
  xs,
  color,
  clickHandle,
}: CButtonProps) => {
  return (
    <Grid item xs={xs}>
      <Button onClick={clickHandle} variant='contained' color={color} fullWidth>
        {name}
      </Button>
    </Grid>
  );
};

export default CButton;
