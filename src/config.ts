import { InjectableFactory } from '@travetto/di';
import { ModelMongoSource, ModelMongoConfig } from '@travetto/model-mongo';
import { ModelSource } from '@travetto/model';

export class AppConfig {
  @InjectableFactory()
  static getDataSource(config: ModelMongoConfig): ModelSource {
    return new ModelMongoSource(config);
  }
}