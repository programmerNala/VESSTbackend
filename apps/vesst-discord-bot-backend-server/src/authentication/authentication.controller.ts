import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthenticationService } from "./authentication.service";
import { TwoFaDto } from "./TwoFaDto";
import { RbacDto } from "./RbacDto";

@swagger.ApiTags("authentications")
@common.Controller("authentications")
export class AuthenticationController {
  constructor(protected readonly service: AuthenticationService) {}

  @common.Post("/rbac/assign-role")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AssignRole(
    @common.Body()
    body: TwoFaDto
  ): Promise<boolean> {
        return this.service.AssignRole(body);
      }

  @common.Post("/2fa/generate")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Generate2FaCode(
    @common.Body()
    body: TwoFaDto
  ): Promise<string> {
        return this.service.Generate2FaCode(body);
      }

  @common.Get("/rbac/permissions/:userId")
  @swagger.ApiOkResponse({
    type: RbacDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetUserPermissions(
    @common.Body()
    body: TwoFaDto
  ): Promise<RbacDto[]> {
        return this.service.GetUserPermissions(body);
      }

  @common.Post("/2fa/verify")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Verify2FaCode(
    @common.Body()
    body: TwoFaDto
  ): Promise<boolean> {
        return this.service.Verify2FaCode(body);
      }
}
