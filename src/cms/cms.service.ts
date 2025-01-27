import { Injectable } from '@nestjs/common';

@Injectable()
export class CmsService {
    getCmsData(): string{
        return 'CMS data'
    }
}
