import LogoutIcon from '@mui/icons-material/Logout';
import { styled } from '@mui/material';

import { BaseButton } from '@/components/BaseButton';
import { useAuth } from '@/hooks/useAuth';

const StyledButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #909D9F 0%, #505D5F 100%)',
});

export const LogoutButton = (): JSX.Element => {
  const { logOut } = useAuth();

  return (
    <StyledButton variant="contained" size="large" endIcon={<LogoutIcon />} onClick={() => logOut()}>
      ログアウト
    </StyledButton>
  );
};
