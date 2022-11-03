import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private users: User[] = [{ id: 0, name: 'sanket' },{ id: 1, name: 'rajan' },{ id: 3, name: 'prital' }];

  findAll(name?:string):User[] {
    if(name){
      return this.users.filter(user => user.name === name);
    }
    return this.users;
  }

  findById(userId: number): User{
    return this.users.find((user) => user.id === userId);
  }

  getHello(): string {
    return 'Hello World!';
  }

  createUser(CreateUserDto:CreateUserDto): User {
    const newUser = { id: Date.now(), name:CreateUserDto.name };
    this.users.push(newUser);
    return newUser;
  }
}
