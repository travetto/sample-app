import { Model, ModelCore } from '@travetto/model';

@Model()
export class Todo implements ModelCore {
  id?: string;
  text: string;
  created?: Date;
  completed?: boolean;
  priority?: number;
}