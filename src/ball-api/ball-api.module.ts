import { Module } from '@nestjs/common';
import { BallApiController } from './ball-api/ball-api.controller';

@Module({
  controllers: [BallApiController]
})
export class BallApiModule {}
