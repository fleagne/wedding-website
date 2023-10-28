export interface EntryForm {
  isAttendance: string;
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  whoseGuest: string;
  gender: string;
  email: string;
  zipCode?: string;
  address?: string;
  apartment?: string;
  phoneNumber?: string;
  persons?: Partial<Person>[];
  message?: string;
}

interface Person {
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  gender: string;
}

export const defaultEntryFormValue: EntryForm = {
  isAttendance: '',
  lastName: '',
  firstName: '',
  lastNameKana: '',
  firstNameKana: '',
  whoseGuest: '',
  gender: '',
  email: '',
  zipCode: '',
  address: '',
  apartment: '',
  phoneNumber: '',
  persons: [],
  message: '',
};

export const defaultPersonValue: Person = {
  lastName: '',
  firstName: '',
  lastNameKana: '',
  firstNameKana: '',
  gender: '',
};
