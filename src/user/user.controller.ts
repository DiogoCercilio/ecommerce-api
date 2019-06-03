import { Controller, Get } from '@nestjs/common';

@Controller('api/user')
export class UserController {
    @Get()
    getUser(userId? :number) {
        return {
            id: userId || null,
            name: 'John Doe'
        };
    }
}
