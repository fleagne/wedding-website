import { Fade, styled } from '@mui/material';
import { useState } from 'react';
import { useTimeoutFn } from 'react-use';

import { Chevron } from '../components/Chevron';
import { Snow } from '../components/Snow';

const Background = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
});

const StyledBackgroundImg = styled('img')({
  position: 'absolute',
  width: '200%',
  height: '200%',
  top: '50%',
  left: '50%',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  filter: 'blur(10px) brightness(85%)',
});

const StyledImgBefore = styled('img')({
  position: 'absolute',
  filter: 'blur(3px)',
  width: '80wh',
  height: '80vh',
  top: '50%',
  left: '50%',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
});

const StyledImgLogo = styled('img')({
  position: 'absolute',
  width: '20wh',
  height: '20vh',
  top: '50%',
  left: '50%',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
});

const StyledImgAfter = styled('img')({
  position: 'absolute',
  width: '80wh',
  height: '80vh',
  top: '50%',
  left: '50%',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
});

export const Top = (): JSX.Element => {
  const [fadeIn, setFadeIn] = useState(false);

  useTimeoutFn(() => setFadeIn(true), 2000);

  return (
    <>
      <Background>
        <StyledBackgroundImg src="../home-before.jpg" />
        <StyledImgBefore src="../home-before.jpg" />
        <StyledImgLogo src="../top.png" />
        <Fade in={fadeIn} timeout={{ enter: 3000 }}>
          <div>
            <StyledBackgroundImg src="../home-after.jpg" />
            <StyledImgAfter src="../home-after.jpg" />
          </div>
        </Fade>
        {fadeIn && (
          <Fade in={fadeIn} timeout={{ enter: 3000 }}>
            <div>
              <Chevron />
              <Chevron />
              <Chevron />
              <Snow />
            </div>
          </Fade>
        )}
      </Background>
    </>
  );
};
