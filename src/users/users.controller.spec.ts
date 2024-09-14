import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            create: jest.fn().mockResolvedValue('Criado'),
            findAll: jest.fn().mockResolvedValue(['Usuário1', 'Usuário2']),
            findOne: jest.fn().mockResolvedValue('Usuário1'),
            update: jest.fn().mockResolvedValue('Atualizado'),
            remove: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('deve estar definido', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('deve chamar UsersService.create e retornar o resultado', async () => {
      const createUserDto: CreateUserDto = {
        login: 'usuario123',
        name: 'Nome do Usuário',
        email: 'usuario@exemplo.com',
        password: 'senha123',
      };

      await expect(controller.create(createUserDto)).resolves.toEqual('Criado');
      expect(service.create).toHaveBeenCalledWith(createUserDto);
    });
  });

  describe('findAll', () => {
    it('deve chamar UsersService.findAll e retornar o resultado', async () => {
      await expect(controller.findAll()).resolves.toEqual(['Usuário1', 'Usuário2']);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('deve chamar UsersService.findOne com o id correto e retornar o resultado', async () => {
      const id = '1';
      await expect(controller.findOne(id)).resolves.toEqual('Usuário1');
      expect(service.findOne).toHaveBeenCalledWith(Number(id));
    });
  });

  describe('update', () => {
    it('deve chamar UsersService.update com o id e dto corretos e retornar o resultado', async () => {
      const id = '1';
      const updateUserDto: UpdateUserDto = {
        name: 'Nome Atualizado',
        email: 'novoemail@exemplo.com',
        password: 'novasenha123',
      };

      await expect(controller.update(id, updateUserDto)).resolves.toEqual('Atualizado');
      expect(service.update).toHaveBeenCalledWith(Number(id), updateUserDto);
    });
  });

  describe('remove', () => {
    it('deve chamar UsersService.remove com o id correto e retornar nada', async () => {
      const id = '1';
      await expect(controller.remove(id)).resolves.toBeUndefined();
      expect(service.remove).toHaveBeenCalledWith(Number(id));
    });
  });
});
