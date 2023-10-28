import CollectionsIcon from '@mui/icons-material/Collections';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { BaseButton } from '@/components/BaseButton';

const StyledButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #6FA9CE 0%, #2EA2B0 100%)',
});

export const CollectionButton = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <StyledButton variant="contained" size="large" startIcon={<CollectionsIcon />} onClick={() => navigate('/contents/memory')}>
      思い出写真集
    </StyledButton>
  );
};
