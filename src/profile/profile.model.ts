import {Field, ObjectType} from  '@nestjs/graphql';

@ObjectType()
export class Profile {
    @Field()
    name: string;
    @Field()
    description: string;
    @Field()
    github:string;
    @Field(() => String, { nullable: true })
    linkedin: string | null;
}
@ObjectType()
export class Skill {
    @Field()
    title: string;
}
@ObjectType()
export class Experience {
    @Field()
    company: string;
    @Field()
    position: string;
    @Field()
    period: string;
    @Field()
    achievements: string;
}

@ObjectType()
export class Project {
    @Field()
    title: string;
    @Field()
    link: string;
}

