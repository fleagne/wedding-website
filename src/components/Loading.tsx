import { Typography, styled } from '@mui/material';

const Background = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  flexFlow: 'column',
});

const StyledImg = styled('img')({
  height: '30%',
});

export const Loading = (): JSX.Element => {
  return (
    <>
      <Background>
        <StyledImg src="/loading.gif" />
        <Typography>Loading...</Typography>
      </Background>
    </>
  );
};
