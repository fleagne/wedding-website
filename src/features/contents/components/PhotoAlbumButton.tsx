import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { BaseButton } from '@/components/BaseButton';

const StyledButton = styled(BaseButton)({
  background: 'linear-gradient(135deg, #EBA487 0%, #DF7448 100%)',
});

export const PhotoAlbumButton = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <StyledButton variant="contained" size="large" startIcon={<PhotoAlbumIcon />} onClick={() => navigate('/contents/album')}>
      結婚式のアルバム
    </StyledButton>
  );
};
