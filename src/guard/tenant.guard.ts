
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class TenantGuard implements CanActivate {
  private readonly validTenantIds = [1, 2, 3];

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const tenantId = request.headers['tenant-id'];

    if (!tenantId) {
      throw new UnauthorizedException('Missing tenant-id in header');
    }

    if (!this.validTenantIds.includes(Number(tenantId))) {
      throw new UnauthorizedException('Invalid tenant-id');
    }

    return true;
  }
}
