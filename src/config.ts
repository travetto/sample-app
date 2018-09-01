import { InjectableFactory } from '@travetto/di';
import { ModelElasticsearchSource, ModelElasticsearchConfig } from '@travetto/model-elasticsearch';
import { ModelSource } from '@travetto/model';

export class AppConfig {
  @InjectableFactory()
  static getDataSource(config: ModelElasticsearchConfig): ModelSource {
    return new ModelElasticsearchSource(config);
  }
}