
import { SetMetadata } from '@nestjs/common';

export const LoggerDecorator = (handlerName: string) =>
  SetMetadata('loggerMessage', `This is called from ${handlerName}`);
