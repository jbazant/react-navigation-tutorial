import { create } from 'apisauce';

export const api = create({
  baseURL: 'https://cloud.memsource.com/api2',
  headers: { Accept: 'application/json' },
});

export function loginUser(data: { userName: string, password: string }) {
  return api.post('/v1/auth/login', data);
}
