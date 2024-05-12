import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    const statusCode = this.getStatusCode(exception);
    const statusMessage = this.getStatusMessage(exception);
    const meta = this.buildMetaProperties(request);
    const error = this.buildErrorProperties(exception);

    const errorResponse: any = {
      success: false,
      statusCode,
      statusMessage,
      meta,
      error,
    };

    response.status(statusCode).json(errorResponse);
  }

  getStatusCode(exception: any) {
    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    return statusCode;
  }

  getStatusMessage(exception: any) {
    const statusMessage =
      exception instanceof HttpException
        ? exception.getResponse()['statusMessage']
        : 'Internal server error';
    return statusMessage;
  }

  getErrorMessage(exception: any) {
    const message =
      exception instanceof HttpException
        ? exception.getResponse()?.['message']
          ? exception.getResponse()?.['message']
          : exception['message']
        : exception['message']
          ? exception['message']
          : HttpStatus.INTERNAL_SERVER_ERROR;
    return message;
  }

  getErrorConstraints(exception: any) {
    const constraints =
      exception instanceof HttpException
        ? exception.getResponse()?.['constraints']
          ? exception.getResponse()?.['constraints']
          : undefined
        : HttpStatus.INTERNAL_SERVER_ERROR;
    return constraints;
  }

  buildErrorProperties(exception: any) {
    const isProduction = process.env.NODE_ENV === 'production';
    const errorMessage = this.getErrorMessage(exception);
    const constraints = this.getErrorConstraints(exception);
    const error = {
      code: exception?.response
        ? exception?.response.code
        : HttpStatus.INTERNAL_SERVER_ERROR,
      message: errorMessage,
      constraints: constraints,
      exception: exception?.name,
      stack: !isProduction ? exception?.stack : undefined,
    };
    return error;
  }

  buildMetaProperties(request: any) {
    const meta = {
      id: uuid(),
      correlationId: request.headers['request-id'] ?? null,
      method: request.method,
      path: request.url,
      timestamp: new Date().toISOString(),
    };
    return meta;
  }
}
