import { create } from 'apisauce'

export const api = create({
  baseURL: 'https://cloud.memsource.com',
  headers: { Accept: 'application/json' },
});

export async function loginUser (username: string, password: string) {
  api.post
}