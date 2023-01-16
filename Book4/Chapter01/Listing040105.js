import { createApp } from 'vue';
import { StockTicker, WeatherWidget } from './Widgets.vue';

import './assets/main.css';

const app1 = createApp(StockTicker);
app1.mount('#stocks');

const app2 = createApp(WeatherWidget);
app2.mount('#weather');
