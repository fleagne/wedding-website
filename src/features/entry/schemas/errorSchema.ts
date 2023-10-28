import * as yup from 'yup';

import { EntryForm } from '../types/types';

export const errorSchema: yup.ObjectSchema<EntryForm> = yup.object({
  isAttendance: yup.string().required(),
  lastName: yup.string().required('必須項目です'),
  firstName: yup.string().required('必須項目です'),
  lastNameKana: yup.string().required('必須項目です'),
  firstNameKana: yup.string().required('必須項目です'),
  whoseGuest: yup.string().required(),
  email: yup.string().required('必須項目です').email('メールアドレスの形式が不正です'),
  gender: yup.string().required(),
  zipCode: yup.string().optional(),
  address: yup.string().optional(),
  apartment: yup.string().optional(),
  phoneNumber: yup.string().optional(),
  persons: yup.array().optional(),
  message: yup.string().optional(),
});
