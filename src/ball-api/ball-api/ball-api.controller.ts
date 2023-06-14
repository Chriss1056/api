import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('ball-api')
export class BallApiController {
    @Get('test')
    testFunc() {
        return [{ testdata: 'test' }]
    }

    @Get('ticket-status')
    getTicketStatus() {
        return [
            { 
                func_name: 'ticket-status',
                func_route: '/ball-api/ticket-status',
                func_description: 'This function is used to retrieve information about the status of the tickets.',
            },
            {
                tickets_left: 'NULL'
            }]
    }

    @Post('reserve-tickets/:id')
    postReserveTickets(@Param('id') id: string) {
        if (id != '4') {
            return [{ response: 'ERR_INVALID_PARAM' }]
        }
        return [{ response: 'ERR_SUCCESS' }]
    }
}
