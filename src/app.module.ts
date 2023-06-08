import { Module } from '@nestjs/common';
import { BallApiModule } from './ball-api/ball-api.module';

@Module({
  imports: [BallApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
