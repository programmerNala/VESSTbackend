import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmbedServiceBase } from "./base/embed.service.base";

@Injectable()
export class EmbedService extends EmbedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
