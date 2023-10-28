import { styled } from '@mui/material';

interface LineThroughProps {
  isChecked: boolean;
}

export const LineThrough = styled('span')<LineThroughProps>(
  ({ isChecked }) =>
    isChecked && {
      position: 'relative',
      '::before,::after': {
        position: 'absolute',
        left: '0',
        content: '""',
        width: '100%',
        borderTop: '1px solid #2B3137',
        transform: 'rotate(-45deg)',
      },
      '::before': {
        top: '45%',
      },
      '::after': {
        top: '65%',
      },
    },
);
