import { MouseEvent } from 'react';
import { Button, Grid } from '@mui/material';

type CButtonProps = {
  name: string;
  xs: number;
  color: 'primary' | 'secondary' | 'success';
  clickHandle: (event: MouseEvent<HTMLButtonElement>) => void;
};

const CButton = ({ name, xs, color, clickHandle }: CButtonProps) => {
  return (
    <Grid item xs={xs}>
      <Button onClick={clickHandle} variant='contained' color={color} fullWidth>
        {name}
      </Button>
    </Grid>
  );
};

export default CButton;
