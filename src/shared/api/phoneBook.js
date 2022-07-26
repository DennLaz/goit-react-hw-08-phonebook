import instance from './auth';

export const getPhoneBook = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addPhoneBook = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const removePhoneBook = async id => {
  await instance.delete(`/contacts/${id}`);
  return id;
};
