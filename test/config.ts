import { InjectableFactory } from '@travetto/di';
import { ModelSource, ModelService } from '@travetto/model';
import { ModelMongoSource, ModelMongoConfig } from '@travetto/model-mongo';
import { QueryVerifierService } from '@travetto/model/src/service/query';

export class TestConfig {
  @InjectableFactory()
  static testSource(): ModelSource {
    return new ModelMongoSource(new ModelMongoConfig());
  }

  @InjectableFactory()
  static modelService(src: ModelSource): ModelService {
    return new ModelService(src, new QueryVerifierService());
  }
}
