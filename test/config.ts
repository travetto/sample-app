import { InjectableFactory } from '@travetto/di';
import { ModelSource } from '@travetto/model';
import { ModelElasticsearchSource, ModelElasticsearchConfig } from '@travetto/model-elasticsearch';

export class TestConfig {

  @InjectableFactory()
  static testSource(config: ModelElasticsearchConfig): ModelSource {
    config.namespace = `test-${Date.now()}`;
    return new ModelElasticsearchSource(config);
  }
}
