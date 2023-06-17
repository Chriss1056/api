import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/test')
      .expect(200);
  });
  
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/ticket-status')
      .expect(200);
  });

  it('/ (PUT)', () => {
    return request(app.getHttpServer())
      .put('/ticket-reserve')
      .expect(200);
  });

  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .post('/push-order/:id')
      .expect(201);
  });

  it('/ (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/delete-order/:id')
      .expect(200);
  });
});
