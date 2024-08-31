import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmbedService } from "./embed.service";
import { EmbedControllerBase } from "./base/embed.controller.base";

@swagger.ApiTags("embeds")
@common.Controller("embeds")
export class EmbedController extends EmbedControllerBase {
  constructor(
    protected readonly service: EmbedService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
