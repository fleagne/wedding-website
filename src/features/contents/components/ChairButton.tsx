import ChairIcon from '@mui/icons-material/Chair';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { BaseButton } from '@/components/BaseButton';

const StyledButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #B0C4DE 0%, #6287B6 100%)',
});

export const ChairButton = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <StyledButton variant="contained" size="large" startIcon={<ChairIcon />} onClick={() => navigate('/contents/seating')}>
      座席表
    </StyledButton>
  );
};
