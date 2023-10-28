import PasswordIcon from '@mui/icons-material/Password';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, IconButton, InputAdornment, Stack, TextField, Typography, styled } from '@mui/material';
import { init, send } from 'emailjs-com';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BackButton } from '@/components/BackButton';
import { emailjsConfig } from '@/configs/emailjsConfig';
import { auth, db } from '@/main';
import { localStorage } from '@/utils/localStorage';

import { Layout } from '../components/Layout';
import { SendButton } from '../components/SendButton';
import { EntryForm } from '../types/types';

const Highlight = styled('span')({
  textDecoration: 'underline',
  textDecorationThickness: '0.5em',
  textDecorationColor: 'rgba(255, 228, 0, 0.4)',
  textUnderlineOffset: '-0.2em',
  textDecorationSkipInk: 'none',
});

export const EntryConfirmation = (): JSX.Element => {
  const navigate = useNavigate();
  const entryFormData = localStorage.get('entry');
  const entry = entryFormData as EntryForm;
  const [password, setPassword] = useState('');
  const [isVisible, setVisible] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const submit = (): void => {
    if (password.length < 6) {
      setError(true);
      return;
    }
    const entryDocumentRef = doc(db, 'entries', entry.email);
    setDoc(entryDocumentRef, {
      ...entry,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        createUserWithEmailAndPassword(auth, entry.email, password)
          .then(() => {
            if (!emailjsConfig.userId || !emailjsConfig.serviceId || !emailjsConfig.templateId) return;
            init(emailjsConfig.userId);

            const templateParams = {
              to_name: `${entry.lastName} ${entry.firstName}`,
              to_email: entry.email,
              password: password,
            };

            send(emailjsConfig.serviceId, emailjsConfig.templateId, templateParams)
              .then(() => {
                // do something
              })
              .catch((error) => {
                console.error(error);
              });
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        navigate('/entry/done');
      });
  };

  return (
    <Layout>
      <>
        <Typography fontSize="14px" textAlign="center">
          以下の内容で登録します
        </Typography>
        <br />
        <Box>
          <Stack direction="column" justifyContent="center" alignItems="center" textAlign="center" spacing={2}>
            <Typography>{entry.isAttendance === 'attend' ? '出席' : '欠席'}</Typography>
            <Stack direction="row" spacing={2} sx={{ margin: '20px' }}>
              <Typography>{entry.lastName}</Typography>
              <Typography>{entry.firstName}</Typography>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ margin: '20px' }}>
              <Typography>{entry.lastNameKana}</Typography>
              <Typography>{entry.firstNameKana}</Typography>
            </Stack>
            <Typography>{entry.whoseGuest === 'groom' ? '新郎ゲスト' : '新婦ゲスト'}</Typography>
            <Typography>{entry.gender === 'male' ? '男性' : '女性'}</Typography>
            <Typography>{entry.email}</Typography>
            <Typography>〒 {entry.zipCode}</Typography>
            <Typography>{entry.address}</Typography>
            <Typography>{entry.apartment}</Typography>
            <Typography>{entry.phoneNumber}</Typography>
            <Typography>お連れ様情報</Typography>
            {entry.persons?.map((person) => {
              return (
                <>
                  <Stack direction="row" spacing={2} sx={{ margin: '20px' }}>
                    <Typography>{person.lastName}</Typography>
                    <Typography>{person.firstName}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={2} sx={{ margin: '20px' }}>
                    <Typography>{person.lastNameKana}</Typography>
                    <Typography>{person.firstNameKana}</Typography>
                  </Stack>
                  <Typography>{person.gender === 'male' ? '男性' : '女性'}</Typography>
                </>
              );
            })}
            <Typography>新郎新婦へのメッセージ</Typography>
            <Typography>{entry.message}</Typography>
            <br />
            <Typography fontSize="14px" textAlign="center">
              内容にお間違えがなければ
              <br />
              ログイン用のパスワードを
              <br />
              <Highlight>6文字以上</Highlight>で設定してください
            </Typography>
            <TextField
              variant="standard"
              label="パスワード"
              type={isVisible ? 'text' : 'password'}
              onChange={(e) => setPassword(e.target.value)}
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
              error={error}
              helperText={error && 'パスワードを6文字以上で入力してください'}
              sx={{ maxWidth: '300px' }}
            />
            <br />
            <Stack direction="column" spacing={2}>
              <SendButton onClick={submit} />
              <BackButton text="再編集する" onClick={() => navigate('/entry')} />
            </Stack>
          </Stack>
        </Box>
      </>
    </Layout>
  );
};
