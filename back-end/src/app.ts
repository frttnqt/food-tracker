import 'module-alias/register';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { keys } from './config';
// @ts-ignore
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.setDatabases();
    this.setAppConfig();
  }

  private setAppConfig(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    // this.app.use('/api/v1', IndexRoute);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  private setDatabases(): void {
    mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
  }
}
