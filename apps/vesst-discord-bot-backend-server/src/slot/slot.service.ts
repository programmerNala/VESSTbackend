import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlotServiceBase } from "./base/slot.service.base";

@Injectable()
export class SlotService extends SlotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
