import LoginIcon from '@mui/icons-material/Login';
import { ButtonProps, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { BaseButton } from './BaseButton';

const StyledButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #CE936F 0%, #B03D2E 100%)',
});

export const LoginButton = (props: ButtonProps): JSX.Element => {
  const { onClick } = props;
  const navigate = useNavigate();

  return (
    <StyledButton variant="contained" size="large" endIcon={<LoginIcon />} onClick={onClick ? onClick : () => navigate('/login')}>
      ログイン
    </StyledButton>
  );
};
