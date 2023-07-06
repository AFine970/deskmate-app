import { createApp } from 'vue';
import App from './App.vue';
import 'vfonts/Lato.css'; // 通用字体
import 'vfonts/FiraCode.css'; // 等宽字体

import { makeSiteChart, fillSite, SiteGroupEnum } from './common/site_chart';
import { mockStudentData } from './common/mock_data';

const siteChart = makeSiteChart(4, 4, 2);
const mockData = mockStudentData(32);
console.log('mockData', mockData);
const randomResult = fillSite(SiteGroupEnum.RandomSex, siteChart, mockData);
console.log('randomResult', randomResult);
const presamesex = fillSite(SiteGroupEnum.SameSex, siteChart, mockData);
console.log('sameSexResult', presamesex);
const prediffsex = fillSite(SiteGroupEnum.DifferentSex, siteChart, mockData);
console.log('diffSexResult', prediffsex);

createApp(App).mount('#app');
