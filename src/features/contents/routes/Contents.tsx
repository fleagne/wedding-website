import { CardContent, Stack, Typography } from '@mui/material';

import { BackButton } from '@/components/BackButton';

import { ChairButton } from '../components/ChairButton';
import { CollectionButton } from '../components/CollectionButton';
import { GitHubButton } from '../components/GitHubButton';
import { Layout } from '../components/Layout';
import { MenuButton } from '../components/MenuButton';
import { PhotoAlbumButton } from '../components/PhotoAlbumButton';
import { ScheduleButton } from '../components/ScheduleButton';

export const Contents = (): JSX.Element => {
  return (
    <>
      <Layout>
        <CardContent>
          <Stack direction="column" justifyContent="center" alignItems="center" textAlign="center" spacing={2}>
            <Typography>事前のお楽しみコンテンツ</Typography>
            <CollectionButton />
            <br />
            <Typography>結婚式当日の参列者向け情報</Typography>
            <ScheduleButton />
            <ChairButton />
            <MenuButton />
            <br />
            <Typography>結婚式当日のお楽しみコンテンツ</Typography>
            <PhotoAlbumButton />
            <br />
            <Typography>Web招待状のソースコード</Typography>
            <GitHubButton />
            <BackButton />
          </Stack>
        </CardContent>
      </Layout>
    </>
  );
};
