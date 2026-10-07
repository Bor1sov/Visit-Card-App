import { Injectable } from '@nestjs/common';
import { Profile } from './profile.model.js';

@Injectable()
export class ProfileService {
  getProfile(): Profile {
    return {name:'Egor',role:'Admin',about:'Chelik'}
  }
}
