import { Injectable } from '@nestjs/common';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class Utils {
  async hashString(plainText: string) {
    const salt = await genSalt(10);
    return await hash(plainText, salt);
  }
}
