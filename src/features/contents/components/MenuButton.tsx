import RestaurantIcon from '@mui/icons-material/Restaurant';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { BaseButton } from '@/components/BaseButton';

const StyledButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #ADD8E6 0%, #66B3CC 100%)',
});

export const MenuButton = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <StyledButton variant="contained" size="large" startIcon={<RestaurantIcon />} onClick={() => navigate('/contents/menu')}>
      メニュー表
    </StyledButton>
  );
};
