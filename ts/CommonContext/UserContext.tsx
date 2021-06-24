import { createContext, Dispatch, SetStateAction } from 'react';

interface IUserContext {
  user: { userName?: string };
  setUser: Dispatch<SetStateAction<{}>>;
}

export const UserContext = createContext<IUserContext>({ user: {}, setUser: () => {} });
