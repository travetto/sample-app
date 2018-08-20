import { Application, InjectableFactory } from '@travetto/di';
import { RestApp, RestAppProvider } from '@travetto/rest';
import { ExpressAppProvider } from '@travetto/rest-express';

@Application('todo')
export class TodoApp {

  @InjectableFactory()
  static appProvider(): RestAppProvider {
    return new ExpressAppProvider();
  }

  constructor(private app: RestApp) { }

  run() {
    this.app.run();
  }
}