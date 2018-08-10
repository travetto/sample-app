import { Request } from 'express';

import { Controller, Get, TypedBody, Post, Put, Delete } from '@travetto/express';
import { Inject } from '@travetto/di';
import { SchemaBody } from '@travetto/schema/extension/express';

import { TodoService } from './service';
import { Todo } from './model';

@Controller('/todo')
export class TodoController {

  @Inject()
  private svc: TodoService;

  @Get('/')
  async getAll() {
    return this.svc.getAll();
  }

  @Get('/:id')
  async getById(req: Request) {
    return this.svc.get(req.params.id);
  }

  @Post('/')
  @SchemaBody(Todo)
  async create(req: TypedBody<Todo>) {
    return await this.svc.add(req.body);
  }

  @Put('/:id/complete')
  async complete(req: Request) {
    return await this.svc.complete(req.params.id, req.query.completed);
  }

  @Delete('/:id')
  async remove(req: Request) {
    await this.svc.remove(req.params.id);
  }
}