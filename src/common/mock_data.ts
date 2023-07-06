import { getRandomSex } from './site_chart';
import uniqueId from 'lodash-es/uniqueId';
import type { StudentInfo } from './types';

export function mockStudentData(count: number): StudentInfo[] {
  const mockData = [];

  let i = 0;
  while (i < count) {
    i += 1;
    mockData.push({
      avatar: '',
      id: uniqueId('id_'),
      name: `studend_${i}`,
      sex: getRandomSex(),
      selected: false,
    });
  }

  return mockData;
}
