import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
  DiskHealthIndicator,
  MemoryHealthIndicator,
  PrismaHealthIndicator,
} from '@nestjs/terminus';
import { Public } from '../../../common/decorators/public-route.decorator';
import { PrismaService } from '../../../prisma/prisma.service';

@ApiTags('Health')
@Public()
@Controller('health')
@Controller({ path: 'health', version: ['1', '2'] })
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private disk: DiskHealthIndicator,
    private mem: MemoryHealthIndicator,
    private db: PrismaHealthIndicator,
    private readonly prisma: PrismaService,
  ) {}

  @Get('shallow')
  @HealthCheck()
  shallow() {
    return this.health.check([
      () => this.http.pingCheck('messageflux', 'https://app.messageflux.com'),
    ]);
  }

  @Get('deep')
  @HealthCheck()
  deep() {
    return this.health.check([
      () => this.http.pingCheck('messageflux', 'https://app.messageflux.com'),
      () =>
        this.disk.checkStorage('storage', { path: '/', thresholdPercent: 0.5 }), //unhealthy if exceed 50%
      () => this.mem.checkHeap('memory_heap', 150 * 1024 * 1024),
      () => this.mem.checkRSS('memory_rss', 150 * 1024 * 1024),
      () => this.db.pingCheck('database', this.prisma, { timeout: 1500 }),
    ]);
  }
}
