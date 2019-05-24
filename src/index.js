import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import initApp from './app';

initApp();
serviceWorker.unregister();
