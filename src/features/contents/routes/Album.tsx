import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { BackButton } from '@/components/BackButton';

export const Album = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <Typography>開発中...</Typography>
      <BackButton onClick={() => navigate('/contents')} />
    </>
  );
};
