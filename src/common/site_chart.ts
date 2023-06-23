/**
 * @author: AFine970
 * @description: 制作座位表
 */

// 座位表数据结构
// [
//   [], [], [], [],
//   [], [], [], [],
//   [], [], [], [],
//   [], [], [], []
// ]

import cloneDeep from 'lodash-es/cloneDeep';
import { Sex, SiteGroupEnum } from './const';
import type { Group, StudentInfo } from './types';

/**
 * 制作座位表的数据的二位数组结构
 * @param row 多少行
 * @param col 多少纵列
 * @param group 每一纵列氛围几个座位
 * @returns
 */
function makeSiteChart(row: number, col: number, groupCount: number): Group[] {
  const matrix: Group[] = [];
  const allGroups = row * col;
  let i = 0;
  while (i < allGroups) {
    const group: Group = new Array(groupCount).fill(-1);
    matrix.push(group);
    i += 1;
  }
  return matrix;
}

/**
 * 随机获取性别
 * @returns 'male' | 'female'
 */
function getRandomSex() {
  const num = Math.random();
  return num < 0.5 ? Sex.Male : Sex.Female;
}

/**
 * 根据输入的长度，随机获取下标
 * @param end
 * @returns
 */
function getRandomIndex(end: number) {
  return new Date().getMilliseconds() % end;
}

/**
 * 随机获取一名学生
 * @param students 学生信息
 * @returns
 */
function getRandomStudentGroup(students: StudentInfo[], group: StudentInfo[]) {
  const count = group.length;
  const newGroup = [];

  for (let i = 0; i < count; i++) {
    const randomSex = getRandomSex();
    const unselectedStudents = students.filter((item) => !item.selected);

    let filterStudents = unselectedStudents.filter(
      (item) => item.sex === randomSex
    );
    if (!filterStudents.length) {
      filterStudents = unselectedStudents;
    }
    const index = getRandomIndex(filterStudents.length);
    const selectedStudent = filterStudents[index];
    const targetIndex = students.findIndex(
      (item) => item.id === selectedStudent.id
    );

    students[targetIndex].selected = true;
    newGroup.push(selectedStudent);
  }

  return newGroup;
}

/**
 * 优先以同性同桌规则，随机获取学生
 * @param students
 * @returns
 */
function getPreSameSexStudent(students: StudentInfo[], group: StudentInfo[]) {
  const randomSex = getRandomSex();
  const count = group.length;
  const newGroup = [];

  for (let i = 0; i < count; i++) {
    const unselectedStudents = students.filter((item) => !item.selected);
    let filterStudents = unselectedStudents.filter(
      (item) => item.sex === randomSex
    );
    if (!filterStudents.length) {
      filterStudents = unselectedStudents;
    }

    const index = getRandomIndex(filterStudents.length);
    const selectedStudent = filterStudents[index];
    const targetIndex = students.findIndex(
      (item) => item.id === selectedStudent.id
    );
    students[targetIndex].selected = true;
    newGroup.push(selectedStudent);
  }

  return newGroup;
}

/**
 * 优先以异性同桌规则，随机获取学生
 * @param students
 * @returns
 */
function getPreDiffSexStudent(students: StudentInfo[], group: StudentInfo[]) {
  const count = group.length;
  const newGroup: StudentInfo[] = [];

  for (let i = 0; i < count; i++) {
    const unselectedStudents = students.filter((item) => !item.selected);
    const randomSex = getRandomSex();

    let filterStudents: StudentInfo[] = [];
    // 是否全部都是男生
    const isAllMale = newGroup.every((item) => item.sex === Sex.Male);
    // 是否全部都是女生
    const isAllFemale = newGroup.every((item) => item.sex === Sex.Female);
    if (i + 1 === count && (isAllMale || isAllFemale)) {
      if (isAllMale) {
        // 如果之前的全部随机选中了男生，那么就需要从女生中选一个
        filterStudents = unselectedStudents.filter(
          (item) => item.sex === Sex.Female
        );
      }
      if (isAllFemale) {
        // 如果之前的全部随机选中了女生，那么就需要从男生中选一个
        filterStudents = unselectedStudents.filter(
          (item) => item.sex === Sex.Male
        );
      }
    } else {
      filterStudents = unselectedStudents.filter(
        (item) => item.sex === randomSex
      );
    }

    if (!filterStudents.length) {
      filterStudents = unselectedStudents;
    }

    const index = getRandomIndex(filterStudents.length);
    const selectedStudent = filterStudents[index];
    const targetIndex = students.findIndex(
      (item) => item.id === selectedStudent.id
    );
    students[targetIndex].selected = true;
    newGroup.push(selectedStudent);
  }

  return newGroup;
}

/**
 * 随机选择学生
 */
function selectStudent(
  type: SiteGroupEnum,
  students: StudentInfo[],
  group: StudentInfo[]
) {
  switch (type) {
    case SiteGroupEnum.DifferentSex:
      return getPreDiffSexStudent(students, group);
    case SiteGroupEnum.SameSex:
      return getPreSameSexStudent(students, group);
    default:
      return getRandomStudentGroup(students, group);
  }
}

/**
 * 填充入座
 * @param type 座位类型
 * @param group
 */
function fillSite(
  type: SiteGroupEnum,
  siteChart: Group[],
  students: StudentInfo[]
) {
  const studentsData = cloneDeep(students);
  return siteChart.map((group) => {
    return selectStudent(type, studentsData, group as unknown as StudentInfo[]);
  });
}

export { getRandomSex, fillSite, makeSiteChart, SiteGroupEnum };
