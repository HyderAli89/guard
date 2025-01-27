import { Injectable, ExecutionContext, CallHandler, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Retrieve metadata using Reflector
    const loggerMessage = this.reflector.get<string>('loggerMessage', context.getHandler());

    // Log the metadata if it exists
    if (loggerMessage) {
      console.log(loggerMessage); // Logs: "This is called from CMS Module"
    }

    return next.handle().pipe(
      tap(() => {
        console.log('Request completed');
      }),
    );
  }
}
