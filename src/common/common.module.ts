import { Global, Module } from '@nestjs/common';
import { ConfigService } from './configs/config.service';
import { Utils } from './utils';

@Global()
@Module({
  providers: [ConfigService, Utils],
  exports: [ConfigService, Utils],
  imports: [],
  controllers: [],
})
export class CommonModule {}
