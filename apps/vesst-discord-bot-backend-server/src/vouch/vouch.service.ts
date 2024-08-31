import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VouchServiceBase } from "./base/vouch.service.base";

@Injectable()
export class VouchService extends VouchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
