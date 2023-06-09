import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('ball-api')
export class BallApiController {
    @Get('test')
    testFunc() {
        return [{ testdata: 'test' }]
    }

    @Get('ticket-status')
    getTicketStatus() {
        return [{ functionStatus: 'WIP'}]
    }
}
