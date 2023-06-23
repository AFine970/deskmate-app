import { createApp } from 'vue';
import './styles.css';
import App from './App.vue';
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
