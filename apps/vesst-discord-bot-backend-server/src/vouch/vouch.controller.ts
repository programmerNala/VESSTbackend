import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VouchService } from "./vouch.service";
import { VouchControllerBase } from "./base/vouch.controller.base";

@swagger.ApiTags("vouches")
@common.Controller("vouches")
export class VouchController extends VouchControllerBase {
  constructor(
    protected readonly service: VouchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
