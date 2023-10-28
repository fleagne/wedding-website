import { Card, Skeleton, Stack, Typography, styled } from '@mui/material';
import { GoogleMap, InfoWindowF } from '@react-google-maps/api';

import { LoginButton } from '@/components/LoginButton';
import { useAuth } from '@/hooks/useAuth';

import { useGoogleMap } from '../api/useGoogleMap';
import { ContentsButton } from '../components/ContentsButton';
import { EntryButton } from '../components/EntryButton';
import { LogoutButton } from '../components/LogoutButton';
import { weddingPlace } from '../configs/placeConfig';
import { mapStyles } from '../styles/mapStyles';

const Background = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: 'url(../rsvp.png) no-repeat center center',
  backgroundSize: 'cover',
});

const Wrapper = styled('div')({
  margin: '64px 24px',
});

const ICard = styled(Card)({
  padding: '24px 8px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
});

const GoogleMapWrapper = styled('div')({
  width: '100%',
  height: 'calc(100vh / 2)',
});

const Highlight = styled('span')({
  textDecoration: 'underline',
  textDecorationThickness: '0.5em',
  textDecorationColor: 'rgba(255, 228, 0, 0.4)',
  textUnderlineOffset: '-0.2em',
  textDecorationSkipInk: 'none',
});

export const RSVP = (): JSX.Element => {
  const { user } = useAuth();

  const { isLoaded, onLoad } = useGoogleMap({
    defaultPosition: weddingPlace,
  });

  const options = {
    styles: mapStyles,
  };

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const place = import.meta.env.VITE_APP_WEDDING_PLACE;
  const datetime = import.meta.env.VITE_APP_WEDDING_DATETIME;
  const clerk = import.meta.env.VITE_APP_WEDDING_CLERK_TIME;
  const ceremony = import.meta.env.VITE_APP_WEDDING_CEREMONY_TIME;
  const reception = import.meta.env.VITE_APP_WEDDING_RECEPTION_TIME;
  const href = import.meta.env.VITE_APP_GOOGLE_MAPS_LINK;

  return (
    <>
      <Background>
        <Wrapper>
          <ICard>
            <Stack direction="column" justifyContent="center" alignItems="center" textAlign="center" spacing={2}>
              <Typography>{place}</Typography>
              <Typography>{datetime}</Typography>
              <Typography>受付 {clerk}</Typography>
              <Typography>挙式 {ceremony}</Typography>
              <Typography>披露宴 {reception}</Typography>
              {isLoaded ? (
                <GoogleMapWrapper>
                  <GoogleMap options={options} mapContainerStyle={mapContainerStyle} onLoad={onLoad}>
                    <InfoWindowF position={weddingPlace}>
                      <>
                        <Typography fontSize="12px">
                          {place}
                          <br />
                          <a href={href} target="_blank" rel="noreferrer">
                            Google Mapで開く
                          </a>
                        </Typography>
                      </>
                    </InfoWindowF>
                  </GoogleMap>
                </GoogleMapWrapper>
              ) : (
                <Skeleton />
              )}
              <Typography fontSize="1.1rem">
                お手数ではございますが
                <br />
                <Highlight>12月13日(水)</Highlight>
                <br />
                までにご返信くださいますよう
                <br />
                お願い申し上げます
              </Typography>
              <EntryButton />
              {user ? (
                <>
                  <ContentsButton />
                  <br />
                  <Typography fontSize="11px">
                    {user.email}
                    <br />
                    としてログイン中
                  </Typography>
                  <LogoutButton />
                </>
              ) : (
                <>
                  <LoginButton />
                  <Typography fontSize="10px">
                    ログインすることで
                    <br />
                    参列者限定コンテンツをお楽しみいただけます！
                  </Typography>
                </>
              )}
            </Stack>
          </ICard>
        </Wrapper>
      </Background>
    </>
  );
};
