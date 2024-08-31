import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EntertainmentService } from "./entertainment.service";
import { EntertainmentControllerBase } from "./base/entertainment.controller.base";

@swagger.ApiTags("entertainments")
@common.Controller("entertainments")
export class EntertainmentController extends EntertainmentControllerBase {
  constructor(
    protected readonly service: EntertainmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
