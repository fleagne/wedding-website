import { TextareaAutosize, styled } from '@mui/material';

export const Textarea = styled(TextareaAutosize)({
  fontFamily: 'HannariMincho',
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.5,
  padding: '12px',
  borderRadius: '12px',
  resize: 'none',
  ':focus': {
    borderColor: '#1976D2',
    outline: 'none',
  },
  width: '100%',
});
