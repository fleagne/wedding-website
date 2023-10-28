import SendIcon from '@mui/icons-material/Send';
import { ButtonProps, styled } from '@mui/material';

import { BaseButton } from '@/components/BaseButton';

const StyledButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #6FA9CE 0%, #2EA2B0 100%)',
});

export const SendButton = (props: ButtonProps): JSX.Element => {
  const { onClick } = props;

  return (
    <StyledButton variant="contained" size="large" endIcon={<SendIcon />} onClick={onClick}>
      登録する
    </StyledButton>
  );
};
