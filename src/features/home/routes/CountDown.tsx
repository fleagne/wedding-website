import { Grid, Stack, Typography, styled } from '@mui/material';
import { useState } from 'react';
import { useInterval } from 'react-use';

const Background = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: 'calc(100vw * 1109 / 1479)',
  background: 'url(../countdown.jpg) no-repeat center center',
  backgroundSize: 'cover',
});

const Wrapper = styled('div')({
  margin: '0px 32px',
});

export const CountDown = (): JSX.Element => {
  const [countTime, setCountTime] = useState(Date.parse(import.meta.env.VITE_APP_WEDDING_DATE) - Date.now());

  useInterval(() => setCountTime(countTime - 1000), 1000);

  const days = Math.floor(countTime / 1000 / 60 / 60 / 24);
  const hours = Math.floor(countTime / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(countTime / 1000 / 60) % 60;
  const secounds = Math.floor(countTime / 1000) % 60;

  return (
    <Background>
      <Wrapper>
        <Grid container columns={{ xs: 6 }} textAlign="center">
          <Grid item xs={2} />
          <Grid item xs={2}>
            <Typography>COUNTDOWN</Typography>
            <Typography variant="h4">{days}</Typography>
            <Typography>DAYS</Typography>
            <br />
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={2}>
            <Stack direction="column">
              <Typography>{hours}</Typography>
              <Typography>HOURS</Typography>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Stack direction="column">
              <Typography>{minutes}</Typography>
              <Typography>MINUTES</Typography>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Stack direction="column">
              <Typography>{secounds}</Typography>
              <Typography>SECOUNDS</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Wrapper>
    </Background>
  );
};
