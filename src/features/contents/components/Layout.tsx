import { Card as MuiCard, styled } from '@mui/material';

const Background = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #B0E0E6 0%, #68C0CB 100%)',
  backgroundSize: 'cover',
});

const Wrapper = styled('div')({
  margin: '32px',
});

const Card = styled(MuiCard)({
  padding: '4px 8px',
});

interface LayoutProps {
  children: JSX.Element;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <Background>
      <Wrapper>
        <Card>{children}</Card>
      </Wrapper>
    </Background>
  );
};
