import { Sex } from './const';

export interface StudentInfo {
  name: string;
  avatar: string;
  id: string;
  sex: Sex;
  selected: boolean;
}

export type Group = number[];
