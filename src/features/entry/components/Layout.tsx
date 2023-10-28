import { CardContent, Card as MuiCard, Stack, SxProps, Typography, styled } from '@mui/material';

const Background = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #B0E0E6 0%, #68C0CB 100%)',
});

const Wrapper = styled('div')({
  margin: '16px',
});

const Card = styled(MuiCard)({
  padding: '24px 8px',
});

const WeddingInvitation = styled('img')({
  width: '100%',
});

interface LayoutProps {
  children: JSX.Element;
  sx?: SxProps;
}

export const Layout = (props: LayoutProps) => {
  const { children, sx } = props;

  return (
    <Background sx={sx}>
      <Wrapper>
        <Card>
          <CardContent>
            <Stack alignItems="center" spacing={2}>
              <WeddingInvitation src="../wi.png" />
              <Typography variant="h5">Toshinori & Maki</Typography>
            </Stack>
            <br />
            {children}
          </CardContent>
        </Card>
      </Wrapper>
    </Background>
  );
};
