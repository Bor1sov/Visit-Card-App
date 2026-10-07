import { Query, Resolver } from "@nestjs/graphql";
import { ProfileService } from "./profile.service.js";
import { Profile } from "./profile.model.js";

@Resolver()
export class ProfileResolver {
    constructor(private readonly profileService:ProfileService){}
    @Query(() => Profile, {nullable: true})
    profile():Promise<Profile | null> {
        return this.profileService.getProfile();
    }
}