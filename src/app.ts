import { Application, Inject } from '@travetto/di';
import { ExpressApp } from '@travetto/express';

@Application('todo')
export class TodoApp {
  @Inject()
  express: ExpressApp;

  run() {
    this.express.run();
  }
}