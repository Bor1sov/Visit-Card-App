import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import { ProfileModule } from './profile/profile.module.js';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile:true,
  }), ProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
