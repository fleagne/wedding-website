import { yupResolver } from '@hookform/resolvers/yup';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Input, InputLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { BackButton } from '@/components/BackButton';
import { localStorage } from '@/utils/localStorage';

import { getAddress } from '../api/getAddress';
import { AllergyButton } from '../components/AllergyButton';
import { EntryConfirmButton } from '../components/EntryConfirmButton';
import { Layout } from '../components/Layout';
import { LineThrough } from '../components/LineThrough';
import { PersonAddButton } from '../components/PersonAddButton';
import { StyledFormControlLabel } from '../components/StyledFormControlLabel';
import { Textarea } from '../components/Textarea';
import { errorSchema } from '../schemas/errorSchema';
import { EntryForm, defaultEntryFormValue, defaultPersonValue } from '../types/types';

export const Entry = (): JSX.Element => {
  const navigate = useNavigate();
  const init = localStorage.get('entry');
  const defaultValues = init ? (init as EntryForm) : defaultEntryFormValue;

  const { control, handleSubmit, setValue, getValues } = useForm<EntryForm>({
    mode: 'all',
    criteriaMode: 'all',
    shouldFocusError: false,
    defaultValues,
    resolver: yupResolver(errorSchema),
  });

  const onBlurZipCode = async (zipCode?: string): Promise<void> => {
    if (!zipCode) return;
    const address = await getAddress(zipCode);
    setValue('address', address);
  };

  const addPerson = (): void => {
    const persons = getValues('persons');
    return persons ? setValue('persons', [...persons, defaultPersonValue]) : setValue('persons', [defaultPersonValue]);
  };

  const submit = (data: EntryForm): void => {
    if (data.persons) {
      data.persons = data.persons.filter((p) => p.firstName && p.firstNameKana && p.lastName && p.lastNameKana && p.gender);
    }
    localStorage.set('entry', JSON.stringify(data));
    navigate('/entry/confirm');
  };

  return (
    <Layout>
      <>
        <Typography fontSize="12px" color="red" textAlign="center">
          * は必須項目です
        </Typography>
        <br />
        <Box>
          <Stack direction="column" justifyContent="center" alignItems="center" textAlign="center" spacing={4}>
            <Controller
              name="isAttendance"
              control={control}
              render={({ field }) => (
                <>
                  <FormControl>
                    <FormLabel required>どちらかをお選びください</FormLabel>
                    <RadioGroup {...field}>
                      <Stack direction="row" spacing={5}>
                        <Stack direction="row" spacing={2}>
                          <StyledFormControlLabel
                            value="attend"
                            control={<Radio icon={<CheckCircleIcon color="disabled" />} checkedIcon={<CheckCircleIcon color="primary" />} />}
                            label={
                              <>
                                <Typography>
                                  <LineThrough isChecked={field.value === 'attend'}>ご</LineThrough>出席
                                </Typography>
                              </>
                            }
                            checked={field.value === 'attend'}
                          />
                          <StyledFormControlLabel
                            value="decline"
                            control={<Radio icon={<CancelIcon color="disabled" />} checkedIcon={<CancelIcon color="error" />} />}
                            label={
                              <>
                                <Typography>
                                  <LineThrough isChecked={field.value === 'decline'}>ご</LineThrough>欠席
                                </Typography>
                              </>
                            }
                            checked={field.value === 'decline'}
                          />
                        </Stack>
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                </>
              )}
            />
            <Stack direction="row" spacing={2} sx={{ margin: '20px' }}>
              <Controller
                name="lastName"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <FormControl>
                      <InputLabel required>姓</InputLabel>
                      <Input {...field} error={fieldState.invalid} />
                      <FormHelperText error>{fieldState.error?.message}</FormHelperText>
                    </FormControl>
                  </>
                )}
              />
              <Controller
                name="firstName"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <FormControl>
                      <InputLabel required>名</InputLabel>
                      <Input {...field} error={fieldState.invalid} />
                      <FormHelperText error>{fieldState.error?.message}</FormHelperText>
                    </FormControl>
                  </>
                )}
              />
            </Stack>
            <Stack direction="row" spacing={2} sx={{ margin: '20px' }}>
              <Controller
                name="lastNameKana"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <FormControl>
                      <InputLabel required>姓（かな）</InputLabel>
                      <Input {...field} error={fieldState.invalid} />
                      <FormHelperText error>{fieldState.error?.message}</FormHelperText>
                    </FormControl>
                  </>
                )}
              />
              <Controller
                name="firstNameKana"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <FormControl>
                      <InputLabel required>名（かな）</InputLabel>
                      <Input {...field} error={fieldState.invalid} />
                      <FormHelperText error>{fieldState.error?.message}</FormHelperText>
                    </FormControl>
                  </>
                )}
              />
            </Stack>
            <Controller
              name="whoseGuest"
              control={control}
              render={({ field }) => (
                <>
                  <FormControl>
                    <RadioGroup {...field}>
                      <Stack direction="row" spacing={2}>
                        <StyledFormControlLabel
                          value="groom"
                          control={<Radio icon={<ManIcon color="disabled" />} checkedIcon={<ManIcon color="primary" />} />}
                          label="新郎ゲスト"
                          checked={field.value === 'groom'}
                        />
                        <StyledFormControlLabel
                          value="bride"
                          control={<Radio icon={<WomanIcon color="disabled" />} checkedIcon={<WomanIcon color="error" />} />}
                          label="新婦ゲスト"
                          checked={field.value === 'bride'}
                        />
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                </>
              )}
            />
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <>
                  <FormControl>
                    <RadioGroup {...field}>
                      <Stack direction="row" spacing={2}>
                        <StyledFormControlLabel
                          value="male"
                          control={<Radio icon={<MaleIcon color="disabled" />} checkedIcon={<MaleIcon color="primary" />} />}
                          label="男性"
                          checked={field.value === 'male'}
                        />
                        <StyledFormControlLabel
                          value="female"
                          control={<Radio icon={<FemaleIcon color="disabled" />} checkedIcon={<FemaleIcon color="error" />} />}
                          label="女性"
                          checked={field.value === 'female'}
                        />
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                </>
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <FormControl fullWidth>
                    <InputLabel required>メールアドレス</InputLabel>
                    <Input {...field} error={fieldState.invalid} />
                    <FormHelperText error>{fieldState.error?.message}</FormHelperText>
                  </FormControl>
                </>
              )}
            />
            <Controller
              name="zipCode"
              control={control}
              render={({ field }) => (
                <>
                  <FormControl fullWidth>
                    <InputLabel>郵便番号</InputLabel>
                    <Input {...field} onBlur={() => onBlurZipCode(field.value)} />
                  </FormControl>
                </>
              )}
            />
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <>
                  <FormControl fullWidth>
                    <InputLabel>ご住所</InputLabel>
                    <Input {...field} />
                  </FormControl>
                </>
              )}
            />
            <Controller
              name="apartment"
              control={control}
              render={({ field }) => (
                <>
                  <FormControl fullWidth>
                    <InputLabel>建物名</InputLabel>
                    <Input {...field} />
                  </FormControl>
                </>
              )}
            />
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <>
                  <FormControl fullWidth>
                    <InputLabel>電話番号</InputLabel>
                    <Input {...field} />
                  </FormControl>
                </>
              )}
            />
            <AllergyButton />
            <Controller
              name="persons"
              control={control}
              render={({ field }) => (
                <>
                  {field.value?.map((_, index) => {
                    return (
                      <>
                        <Stack key={`person_${index}`} direction="row" spacing={2} sx={{ margin: '20px' }}>
                          <Controller
                            key={`persons.${index}.lastName`}
                            name={`persons.${index}.lastName`}
                            control={control}
                            defaultValue=""
                            render={({ field, fieldState }) => (
                              <>
                                <FormControl>
                                  <InputLabel required>姓</InputLabel>
                                  <Input {...field} error={fieldState.invalid} />
                                  <FormHelperText error>{fieldState.error?.message}</FormHelperText>
                                </FormControl>
                              </>
                            )}
                          />
                          <Controller
                            key={`persons.${index}.firstName`}
                            name={`persons.${index}.firstName`}
                            control={control}
                            defaultValue=""
                            render={({ field, fieldState }) => (
                              <>
                                <FormControl>
                                  <InputLabel required>名</InputLabel>
                                  <Input {...field} error={fieldState.invalid} />
                                  <FormHelperText error>{fieldState.error?.message}</FormHelperText>
                                </FormControl>
                              </>
                            )}
                          />
                        </Stack>
                        <Stack direction="row" spacing={2} sx={{ margin: '20px' }}>
                          <Controller
                            key={`persons.${index}.lastNameKana`}
                            name={`persons.${index}.lastNameKana`}
                            control={control}
                            defaultValue=""
                            render={({ field, fieldState }) => (
                              <>
                                <FormControl>
                                  <InputLabel required>姓（かな）</InputLabel>
                                  <Input {...field} error={fieldState.invalid} />
                                  <FormHelperText error>{fieldState.error?.message}</FormHelperText>
                                </FormControl>
                              </>
                            )}
                          />
                          <Controller
                            key={`persons.${index}.firstNameKana`}
                            name={`persons.${index}.firstNameKana`}
                            control={control}
                            defaultValue=""
                            render={({ field, fieldState }) => (
                              <>
                                <FormControl>
                                  <InputLabel required>名（かな）</InputLabel>
                                  <Input {...field} error={fieldState.invalid} />
                                  <FormHelperText error>{fieldState.error?.message}</FormHelperText>
                                </FormControl>
                              </>
                            )}
                          />
                        </Stack>
                        <Controller
                          key={`persons.${index}.gender`}
                          name={`persons.${index}.gender`}
                          control={control}
                          defaultValue="male"
                          render={({ field }) => (
                            <>
                              <FormControl>
                                <RadioGroup {...field}>
                                  <Stack direction="row" spacing={2}>
                                    <FormControlLabel value="male" control={<Radio />} label="男性" />
                                    <FormControlLabel value="female" control={<Radio />} label="女性" />
                                  </Stack>
                                </RadioGroup>
                              </FormControl>
                            </>
                          )}
                        />
                        <AllergyButton />
                      </>
                    );
                  })}
                </>
              )}
            />
            <PersonAddButton onClick={addPerson} />
            <Typography>新郎新婦へのメッセージ</Typography>
            <Controller name="message" control={control} render={({ field }) => <Textarea {...field} minRows={5} maxRows={5} />} />
            <br />
            <Stack direction="column" spacing={2}>
              <EntryConfirmButton onClick={handleSubmit(submit)} />
              <BackButton />
            </Stack>
          </Stack>
        </Box>
      </>
    </Layout>
  );
};
