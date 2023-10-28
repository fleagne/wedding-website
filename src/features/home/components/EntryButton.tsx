import EditNoteIcon from '@mui/icons-material/EditNote';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { BaseButton } from '@/components/BaseButton';

const StyledButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #6FA9CE 0%, #2EA2B0 100%)',
});

export const EntryButton = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <StyledButton variant="contained" size="large" startIcon={<EditNoteIcon />} onClick={() => navigate('/entry')}>
      招待状に回答する
    </StyledButton>
  );
};
