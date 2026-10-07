import { Module } from '@nestjs/common';
import { AppService } from './profile/app.service.js';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import { AppResolver } from './profile/app.resolver.js';
import { ProfileModule } from './profile/profile.module.js';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile:true,
  }), ProfileModule],
  controllers: [],
  providers: [AppService,AppResolver],
})
export class AppModule {}
