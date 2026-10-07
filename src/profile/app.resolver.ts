import { Query, Resolver } from "@nestjs/graphql";
import { AppService } from "./app.service.js";
import { Profile } from "./profile.model.js";

@Resolver()
export class AppResolver {
    constructor(private readonly appService:AppService){}
    @Query(() => Profile)
    profile():Profile {
        return this.appService.getProfile();
    }
}