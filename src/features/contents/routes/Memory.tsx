import { Button, Dialog, Grid, InputLabel, Stack, Typography, styled } from '@mui/material';
import { ListResult, StorageReference, getDownloadURL, list, ref, uploadBytes } from 'firebase/storage';
import { useCallback, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useEffectOnce } from 'react-use';

import { BackButton } from '@/components/BackButton';
import { Loading } from '@/components/Loading';
import { storage } from '@/main';

import { PhotoAlbumButton } from '../components/PhotoAlbumButton';

const Wrapper = styled('div')({
  margin: '16px',
});

const IImg = styled('img')({
  height: '18vh',
});

const DialogImg = styled('img')({
  height: '100%',
});

const IInputLabel = styled(InputLabel)({
  border: '#A0A0A0 3px dotted',
  borderRadius: 25,
  width: '210px',
  height: '210px',
  lineHeight: '210px',
  cursor: 'pointer',
});

export const Memory = (): JSX.Element => {
  const navigate = useNavigate();
  const didEffect = useRef(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | undefined>(undefined);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files && fileInputRef.current?.files) {
      const imageFiles: File[] = [...e.target.files];
      if (!imageFiles) return;

      imageFiles.forEach(async (imageFile) => {
        const storageRef = ref(storage, `${imageFile.name}`);
        await uploadBytes(storageRef, imageFile);
        toast.success('画像をアップロードしました！');
      });
    }
  };

  const listStorage = useCallback(async (pageToken?: string): Promise<ListResult> => {
    const listRef = ref(storage);
    return await list(listRef, { maxResults: 10, pageToken: pageToken });
  }, []);

  const getURL = useCallback(async (itemRef: StorageReference) => {
    return await getDownloadURL(ref(storage, itemRef.fullPath));
  }, []);

  const fetchImages = useCallback(
    async (pageToken?: string) => {
      listStorage(pageToken).then((page) => {
        Promise.all([...page.items.map((itemRef) => getURL(itemRef))]).then((res) => {
          setNextPageToken(page.nextPageToken);
          setImageUrls([...imageUrls, ...res]);
        });
      });
    },
    [listStorage, getURL, imageUrls],
  );

  useEffectOnce(() => {
    if (!didEffect.current) {
      didEffect.current = true;
      fetchImages();
    }
  });

  const handleOpen = (imageUrl: string) => {
    setOpen(true);
    setSelectedImageUrl(imageUrl);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImageUrl(undefined);
  };

  const fetchNextImageUrls = () => {
    fetchImages(nextPageToken);
  };

  return (
    <>
      <Wrapper>
        {imageUrls.length > 0 ? (
          <>
            <Stack alignItems="center" spacing={2}>
              <Grid container textAlign="center" spacing={1}>
                {imageUrls.map((imageUrl, index) => (
                  <Grid item key={index} xs={6}>
                    <IImg src={imageUrl} onClick={() => handleOpen(imageUrl)} />
                  </Grid>
                ))}
              </Grid>
              {nextPageToken && <Button onClick={() => fetchNextImageUrls()}>...もっと見る</Button>}
            </Stack>
          </>
        ) : (
          <Loading />
        )}
        <br />
        <Stack direction="column" justifyContent="center" alignItems="center" textAlign="center" spacing={2}>
          <Typography>
            新郎新婦との思い出の写真をアップロードして
            <br />
            結婚式を楽しみに迎えましょう！！
          </Typography>
          <IInputLabel htmlFor="imageId">
            + 画像をアップロード
            <input id="imageId" ref={fileInputRef} type="file" multiple hidden onChange={handleFileChange} />
          </IInputLabel>
          <PhotoAlbumButton />
          <BackButton onClick={() => navigate('/contents')} />
        </Stack>
      </Wrapper>
      {open && selectedImageUrl && (
        <Dialog open={open} onClose={handleClose}>
          <DialogImg src={selectedImageUrl} />
        </Dialog>
      )}
    </>
  );
};
