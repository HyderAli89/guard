
import { Controller, Get } from '@nestjs/common';
import { LoggerDecorator } from '../decorator/logger.decorator';

@Controller('cms')
export class CmsController {
  @Get()
  @LoggerDecorator('CMS Module')
  getCmsData(): string {
    return 'CMS data accessed';
  }
}
