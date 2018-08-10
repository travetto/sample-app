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

  /**
   * Get all todos
   */
  @Get('/')
  async getAll(): Promise<Todo[]> {
    return this.svc.getAll();
  }

  /**
   * Get Todo by id
   * @param id {String} Todo id
   */
  @Get('/:id')
  async getById(req: Request): Promise<Todo> {
    return this.svc.get(req.params.id);
  }

  /**
   * Create a todo
   */
  @Post('/')
  @SchemaBody(Todo)
  async create(req: TypedBody<Todo>): Promise<Todo> {
    return await this.svc.add(req.body);
  }

  /**
   * Complete a todod
   * @param id {String} Todo id
   */
  @Put('/:id/complete')
  async complete(req: Request) {
    return await this.svc.complete(req.params.id, req.query.completed);
  }

  /**
   * Delete a todo
   * @param id {String} Todo id
   */
  @Delete('/:id')
  async remove(req: Request) {
    await this.svc.remove(req.params.id);
  }
}