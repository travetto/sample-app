import { Application, Inject, InjectableFactory } from '@travetto/di';
import { RestApp, RestAppProvider } from '@travetto/rest';
import { AwsLambdaAppProvider } from '@travetto/rest-aws-lambda';

@Application('todo')
export class TodoApp {

  @InjectableFactory()
  static appProvider(): RestAppProvider {
    return new AwsLambdaAppProvider();
  }

  @Inject()
  express: RestApp;

  run() {
    this.express.run();
  }
}