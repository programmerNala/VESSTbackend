import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlotService } from "./slot.service";
import { SlotGrpcControllerBase } from "./base/slot.grpc.controller.base";

@swagger.ApiTags("slots")
@common.Controller("slots")
export class SlotGrpcController extends SlotGrpcControllerBase {
  constructor(protected readonly service: SlotService) {
    super(service);
  }
}
