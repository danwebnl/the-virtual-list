import { createContext } from "react";

export type User = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
};

type AppContext = {
  list: User[];
  setList: React.Dispatch<React.SetStateAction<User[]>>;
  lastPage: number;
  setLastPage: React.Dispatch<React.SetStateAction<number>>;
};

const defaultState = {
  list: [],
  setList: () => void 0,
  lastPage: 0,
  setLastPage: () => void 0,
};

export default createContext<AppContext>(defaultState);
