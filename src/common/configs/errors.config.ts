import { HttpStatusCode } from 'axios';

export const errors = {
  propertyValidationFailed: {
    statusCode: HttpStatusCode.BadRequest,
    statusMessage: 'Bad Request',
    code: 'MF-0100',
    message: 'Property validation failed.',
  },
  invalidCredentials: {
    statusCode: HttpStatusCode.BadRequest,
    statusMessage: 'Bad Request',
    code: 'MF-0101',
    message: 'invalid credentials.',
  },
  invalidAccountId: {
    statusCode: HttpStatusCode.BadRequest,
    statusMessage: 'Bad Request',
    code: 'MF-0102',
    message: 'invalid account id.',
  },
  invalidAccountEmail: {
    statusCode: HttpStatusCode.BadRequest,
    statusMessage: 'Bad Request',
    code: 'MF-0103',
    message: 'invalid account email.',
  },
  invalidAccountPassword: {
    statusCode: HttpStatusCode.BadRequest,
    statusMessage: 'Bad Request',
    code: 'MF-0104',
    message: 'invalid account password.',
  },
  accountAlreadyExists: {
    statusCode: HttpStatusCode.Conflict,
    statusMessage: 'Conflict',
    code: 'MF-0105',
    message: 'Account already exists.',
  },
  resetPasswordTokenFailed: {
    statusCode: HttpStatusCode.BadRequest,
    statusMessage: 'Bad Request',
    code: 'MF-0106',
    message: 'Reset password token failed.',
  },
  resetPasswordTokenExpired: {
    statusCode: HttpStatusCode.InternalServerError,
    statusMessage: 'Internal Server Error',
    code: 'MF-0107',
    message: 'Reset password token has expired.',
  },
  emailTokenValidationFailed: {
    statusCode: HttpStatusCode.BadRequest,
    statusMessage: 'Bad Request',
    code: 'MF-0108',
    message: 'Email token validation failed.',
  },
  emailTokenExpired: {
    statusCode: HttpStatusCode.BadRequest,
    statusMessage: 'Bad Request',
    code: 'MF-0109',
    message: 'Email token expired.',
  },
  invalidRefreshToken: {
    statusCode: HttpStatusCode.Unauthorized,
    statusMessage: 'Unauthorized',
    code: 'MF-0110',
    message: 'Invalid refresh token.',
  },
  missingRefreshTokenId: {
    statusCode: HttpStatusCode.BadRequest,
    statusMessage: 'Bad Request',
    code: 'MF-0111',
    message:
      'Refresh token Id is missing. Please provide "Token-Id" information in the header.',
  },
  missingWorkspaceName: {
    statusCode: HttpStatusCode.BadRequest,
    statusMessage: 'Bad Request',
    code: 'MF-0112',
    message: 'Workspace name cannot be empty.',
  },
  NoRolesToAccess: {
    statusCode: HttpStatusCode.Forbidden,
    statusMessage: 'Forbidden resource',
    code: 'MF-0200',
    message: `You don't have roles required to access this resource.`,
  },
  invalidChannelId: {
    statusCode: HttpStatusCode.BadRequest,
    statusMessage: 'Bad Request',
    code: 'MF-0202',
    message: 'invalid channel id.',
  },
};
