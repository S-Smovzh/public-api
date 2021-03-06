import { ExceptionFilter, Catch, ArgumentsHost } from "@nestjs/common";
import { Request, Response } from "express";
import { InternalException } from "../Internal.exception";
import { RequestBodyException } from "../RequestBody.exception";

@Catch(InternalException, RequestBodyException)
export class RequestBodyAndInternalExceptionFilter implements ExceptionFilter {
  catch(exception: InternalException & RequestBodyException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    response.status(200).json({
      error: {
        statusCode: exception.response.code,
        message: exception.response.message
      },
      timestamp: new Date().toUTCString(),
      path: request.url
    });
  }
}
