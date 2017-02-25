import { Module } from '@nestjs/common';

import { GraphQLApiModule } from './modules/graphql-api/graphql-api.module';

@Module({
  imports: [GraphQLApiModule],
  controllers: [],
  components: [],
})
export class ApplicationModule {}
