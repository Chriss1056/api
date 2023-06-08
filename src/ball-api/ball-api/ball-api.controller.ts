import { Controller, Get } from '@nestjs/common';

@Controller('ball-api')
export class BallApiController {
    @Get('test')
    testFunc() {
        return [{ testdata: 'test' }]
    }
}
