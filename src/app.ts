import express, {Application} from 'express';
import proxy from 'express-http-proxy';
import morgan from 'morgan';

import dotenv from 'dotenv';
import { Signale } from "signale";

const app:Application = express();
const signale = new Signale();

app.use(morgan('dev'));

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use('/sellerService', proxy('https://bazaranddrops.ddns.net'));
app.use('/inventoryService',proxy('https://bazaranddrops.ddns.net'))
app.use('/userService', proxy('https://bazaranddrops.ddns.net'))

app.listen(PORT,() => {
    signale.success(`Servidor corriendo en http://localhost:${PORT}`);
});