import { FormControlLabel, styled } from '@mui/material';

export const StyledFormControlLabel = styled(FormControlLabel)(
  ({ value, checked }) =>
    checked && {
      transform: 'scale(1.3, 1.3)',
      transition: 'transform 100ms ease',
      '::after': {
        position: 'absolute',
        right: '0',
        content: '" "',
        width: '90%',
        height: '1px',
        background: value === 'attend' || value === 'groom' || value === 'male' ? '#1976D2' : '#D32F2F',
        bottom: '-1px',
      },
    },
);
