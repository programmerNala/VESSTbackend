import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EntertainmentServiceBase } from "./base/entertainment.service.base";

@Injectable()
export class EntertainmentService extends EntertainmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
