/* eslint-disable no-irregular-whitespace */
import { Card, CardContent, Typography, styled } from '@mui/material';

const Background = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100vh',
  background: 'url(../message.png) no-repeat bottom center',
  backgroundSize: 'cover',
});

const Wrapper = styled('div')({
  margin: '0px auto',
});

const ICard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '8px',
  backgroundImage: 'url(../washi.jpg)',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  backgroundBlendMode: 'lighten',
});

const StyledTypography = styled(Typography)({
  fontSize: 'calc(0.20vw + 0.70rem)',
});

export const Message = (): JSX.Element => {
  return (
    <>
      <Background>
        <Wrapper>
          <ICard>
            <CardContent>
              <Typography variant="h5">MESSAGE</Typography>
              <br />
              <br />
              <StyledTypography>謹啓</StyledTypography>
              <br />
              <StyledTypography>秋も深くなってまいりました</StyledTypography>
              <StyledTypography>皆様におかれましては</StyledTypography>
              <StyledTypography>ますますご清祥のこととお慶び申し上げます</StyledTypography>
              <br />
              <StyledTypography>さて　私ども両名はすでに入籍を済ませ</StyledTypography>
              <StyledTypography>新しい生活をはじめております</StyledTypography>
              <br />
              <StyledTypography>このたび遅ればせながら</StyledTypography>
              <StyledTypography>結婚式を挙げることとなりました</StyledTypography>
              <br />
              <StyledTypography>つきましては　日頃お世話になっております皆様に</StyledTypography>
              <StyledTypography>感謝を込めて　ささやかな小宴を催したく存じます</StyledTypography>
              <br />
              <StyledTypography>ご多用中　誠に恐縮ではございますが</StyledTypography>
              <StyledTypography>ぜひご出席をいただきたく　ご案内申し上げます</StyledTypography>
              <br />
              <StyledTypography>謹白</StyledTypography>
              <br />
              <StyledTypography>11月吉日</StyledTypography>
            </CardContent>
          </ICard>
        </Wrapper>
      </Background>
    </>
  );
};
