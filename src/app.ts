import { Application, Inject, InjectableFactory } from '@travetto/di';
import { RestApp, RestAppProvider } from '@travetto/rest';
import { RestExpressAppProvider } from '@travetto/rest-express';

@Application('todo')
export class TodoApp {

  @InjectableFactory()
  static appProvider(): RestAppProvider {
    return new RestExpressAppProvider();
  }

  @Inject()
  express: RestApp;

  run() {
    this.express.run();
  }
}