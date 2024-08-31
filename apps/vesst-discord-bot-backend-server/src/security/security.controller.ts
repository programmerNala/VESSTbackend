import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SecurityService } from "./security.service";
import { SecurityControllerBase } from "./base/security.controller.base";

@swagger.ApiTags("securities")
@common.Controller("securities")
export class SecurityController extends SecurityControllerBase {
  constructor(
    protected readonly service: SecurityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
