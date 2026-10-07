import { Injectable } from '@nestjs/common';
import { Profile } from './profile.model.js';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Это тестовое задание для ITSolutions.В проекте реализована backend состовляющая. При необходимости могу также добавить frontend, но как я понял из ТЗ, на данном этапе этого делать не нужно';
  }
  getProfile(): Profile {
    return {name:'Egor',role:'Admin',about:'Chelik'}
  }
}
