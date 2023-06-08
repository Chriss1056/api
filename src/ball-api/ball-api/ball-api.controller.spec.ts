import { Test, TestingModule } from '@nestjs/testing';
import { BallApiController } from './ball-api.controller';

describe('BallApiController', () => {
  let controller: BallApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BallApiController],
    }).compile();

    controller = module.get<BallApiController>(BallApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
