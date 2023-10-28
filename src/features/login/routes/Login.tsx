import MailIcon from '@mui/icons-material/Mail';
import PasswordIcon from '@mui/icons-material/Password';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, Card, CardContent, IconButton, InputAdornment, Stack, TextField, styled } from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { BackButton } from '@/components/BackButton';
import { LoginButton } from '@/components/LoginButton';
import { useAuth } from '@/hooks/useAuth';

const Background = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #B0E0E6 0%, #68C0CB 100%)',
  height: '100vh',
});

const Wrapper = styled('div')({
  margin: '32px',
});

const StyledCard = styled(Card)({
  padding: '24px 8px',
});

interface Form {
  email: string;
  password: string;
}

export const Login = (): JSX.Element => {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const [isVisible, setVisible] = useState<boolean>(false);

  const { control, handleSubmit } = useForm({
    mode: 'all',
    criteriaMode: 'all',
    shouldFocusError: false,
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const submit = (data: Form): void => {
    logIn(data.email, data.password)
      .then(() => {
        toast.success('ログインしました！');
        navigate('/contents');
      })
      .catch(() => {
        toast.error('ログインに失敗しました...', {
          style: {
            border: '1px solid #B03D2E',
            color: '#FFFAEE',
            background: '#B03D2E',
          },
          iconTheme: {
            primary: '#FFFAEE',
            secondary: '#B03D2E',
          },
        });
      });
  };

  return (
    <>
      <Background>
        <Wrapper>
          <StyledCard>
            <CardContent>
              <Box>
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        variant="standard"
                        label="メールアドレス"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MailIcon />
                            </InputAdornment>
                          ),
                        }}
                        required
                        fullWidth
                        sx={{ maxWidth: '300px' }}
                      />
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        variant="standard"
                        label="パスワード"
                        type={isVisible ? 'text' : 'password'}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PasswordIcon />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={() => setVisible(!isVisible)}>{isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}</IconButton>
                            </InputAdornment>
                          ),
                        }}
                        required
                        fullWidth
                        sx={{ maxWidth: '300px' }}
                      />
                    )}
                  />
                  <br />
                  <Stack direction="column" spacing={2}>
                    <LoginButton onClick={handleSubmit(submit)} />
                    <BackButton />
                  </Stack>
                </Stack>
              </Box>
            </CardContent>
          </StyledCard>
        </Wrapper>
      </Background>
    </>
  );
};
