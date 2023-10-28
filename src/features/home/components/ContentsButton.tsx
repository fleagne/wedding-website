import CelebrationIcon from '@mui/icons-material/Celebration';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { BaseButton } from '@/components/BaseButton';

const StyledButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #EBA487 0%, #DF7448 100%)',
});

export const ContentsButton = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <StyledButton variant="contained" size="large" startIcon={<CelebrationIcon />} onClick={() => navigate('/contents')}>
      参列者専用コンテンツ
    </StyledButton>
  );
};
