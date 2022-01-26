import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async addOne(username: string, password: string): Promise<any> {
    const newUser = {
      userId: this.users.length,
      username,
      password
    }
    this.users.push(newUser)
    return newUser;
  }

  async updateOne(userId: number, username: string, password: string): Promise<any> {
    const userIdx = this.users.findIndex(user => user.userId == userId);
    this.users[userIdx] = {
      userId,
      username: username ? username : this.users[userIdx].username,
      password: password ? password : this.users[userIdx].password
    }
    return this.users[userIdx];
  }
}
