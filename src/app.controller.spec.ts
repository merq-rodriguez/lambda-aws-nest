import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('hello/en', () => {
    it('should return "Hello World in English!"', () => {
      const result = 'Hello World! Nest'
      expect(appController.getHello()).toBe(result);
    });
  });

  describe('hello/fr', () => {
    it('should return "Hello World in Frances!"', () => {
      const result = 'Bonjour le Monde! Nest'
      expect(appController.getBonjour()).toBe(result);
    });
  });


});
