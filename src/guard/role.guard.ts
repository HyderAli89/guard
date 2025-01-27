
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class RoleGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const userRole = request.headers['role']; 
    const routePath = request.route.path; 

    const accessControl = {
      superAdmin: ['/cms', '/orders', '/products'], 
      customer: ['/orders'], 
      admin: ['/products', '/orders'], 
    };

    const allowedPaths = accessControl[userRole];

    if (!allowedPaths || !allowedPaths.includes(routePath)) {
      throw new ForbiddenException('Access denied: insufficient permissions');
    }

    return true;
  }
}
