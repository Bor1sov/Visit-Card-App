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
    @Field(() => [Skill])
    skills: Skill[]
    @Field(() => [Experience])
    experiences: Experience[]
    @Field(() => [Project])
    projects: Project[]
}
@ObjectType()
export class Skill {
    @Field()
    name: string;
}
@ObjectType()
export class Experience {
    @Field()
    company: string;
    @Field()
    position: string;
    @Field()
    startDate: Date;
    @Field(()=> Date, { nullable: true })
    endDate: Date | null;
    @Field()
    achievements: string;
}

@ObjectType()
export class Project {
    @Field()
    name: string;
    @Field()
    link: string;
}

