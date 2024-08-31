import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SlotService } from "./slot.service";
import { SlotControllerBase } from "./base/slot.controller.base";

@swagger.ApiTags("slots")
@common.Controller("slots")
export class SlotController extends SlotControllerBase {
  constructor(
    protected readonly service: SlotService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
