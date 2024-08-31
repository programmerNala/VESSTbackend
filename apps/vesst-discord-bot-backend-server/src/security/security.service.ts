import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SecurityServiceBase } from "./base/security.service.base";

@Injectable()
export class SecurityService extends SecurityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
