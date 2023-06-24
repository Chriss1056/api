import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { pushOrderDTO } from '../ball-api-dtos/ball-api.dto';

@Controller()
export class BallApiController {
    @Get('test')
    testFunc() {
        return [
            { 
                func_name: 'test',
                func_route: '/ball-api/v0.0.1/test',
                func_description: 'This function is used to send a test message to the API.'
            },
            { 
                testdata: 'test' 
            }
        ]
    }

    @Get('ticket-status')
    getTicketStatus() {
        return [
            { 
                func_name: 'ticket-status',
                func_route: '/ball-api/v0.0.1/ticket-status',
                func_description: 'This function is used to retrieve information about the status of the tickets.'
            },
            {
                ticket_price: 'NULL',
                tickets_left: 'NULL'
            }
        ]
    }

    @Put('ticket-reserve')
    getTicketReservation() {
        var id: number;
        id = 4;
        return [
            { 
                func_name: 'ticket-reserve',
                func_route: '/ball-api/v0.0.1/ticket-reserve',
                func_description: 'This function is used to reserve two tickets for processing and assign an identification number to the two tickets to identify them and relate them to the session.'
            },
            { 
                id,
                ticket_price: 'NULL',
                response: 'ERR_SUCCESS' 
            }
        ]
    }

    @Post('push-order/:id')
    pushNewOrder(@Param('id') id: string, @Body() pushParams: pushOrderDTO) {
        return [
            { 
                func_name: 'push-order@ID',
                func_route: '/ball-api/v0.0.1/push-order/:id',
                func_description: 'This function is used to push a new order to the Database via an identification number.'
            },
            {
                id,
                pushParams,
                response: 'ERR_SUCCESS'
            }
        ]
    }

    @Delete('delete-order/:id')
    deleteOrder() {
        return [
            { 
                func_name: 'delete-order@ID',
                func_route: '/ball-api/v0.0.1/delete-order/:id',
                func_description: 'This function is used to delete an order from the Database via an identification number.'
            },
            {
                response: 'ERR_SUCCESS'
            }
        ]
    }

}
