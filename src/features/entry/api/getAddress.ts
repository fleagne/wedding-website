import axios from 'axios';

export const getAddress = async (zipCode: string) => {
  const res = await axios.get('https://api.zipaddress.net/?zipcode=' + zipCode);
  return res.data.data.fullAddress;
};
