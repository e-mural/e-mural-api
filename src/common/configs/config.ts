import { config as configDev } from './config.development';
import { config as configProd } from './config.production';

export default process.env.NODE_ENV === 'production' ? configProd : configDev;
