/* eslint-disable no-irregular-whitespace */
import { Stack, Typography } from '@mui/material';

import { BackButton } from '@/components/BackButton';

import { Layout } from '../components/Layout';

export const EntryDone = (): JSX.Element => {
  return (
    <Layout sx={{ height: '100vh' }}>
      <>
        <Stack textAlign="center" spacing={1}>
          <Typography>ご回答　ありがとうございます！</Typography>
          <br />
          <Typography>
            ログイン情報を
            <br />
            登録したメールに送信しました
          </Typography>
          <br />
          <Typography>
            ご確認の上
            <br />
            ぜひコンテンツをお楽しみください！
          </Typography>
          <br />
          <BackButton />
        </Stack>
      </>
    </Layout>
  );
};
