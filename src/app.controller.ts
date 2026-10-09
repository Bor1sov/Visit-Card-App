import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    getInfo() {
        return {
            name: 'Visit Card API',
            status: 'ok',
            graphql: '/graphql',
        };
    }
}