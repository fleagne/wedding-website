import ScheduleIcon from '@mui/icons-material/Schedule';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { BaseButton } from '@/components/BaseButton';

const StyledButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #B7D5EB 0%, #6FA9CE 100%)',
});

export const ScheduleButton = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <StyledButton variant="contained" size="large" startIcon={<ScheduleIcon />} onClick={() => navigate('/contents/schedule')}>
      タイムスケジュール
    </StyledButton>
  );
};
