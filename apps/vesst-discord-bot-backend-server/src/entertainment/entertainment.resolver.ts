import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EntertainmentResolverBase } from "./base/entertainment.resolver.base";
import { Entertainment } from "./base/Entertainment";
import { EntertainmentService } from "./entertainment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Entertainment)
export class EntertainmentResolver extends EntertainmentResolverBase {
  constructor(
    protected readonly service: EntertainmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
