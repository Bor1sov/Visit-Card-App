import {Field, ObjectType} from  '@nestjs/graphql';

@ObjectType()
export class Profile {
    @Field()
    name: string;
    @Field()
    role: string;
    @Field()
    about:string;
}