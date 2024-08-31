import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SecurityService } from "./security.service";
import { SecurityGrpcControllerBase } from "./base/security.grpc.controller.base";

@swagger.ApiTags("securities")
@common.Controller("securities")
export class SecurityGrpcController extends SecurityGrpcControllerBase {
  constructor(protected readonly service: SecurityService) {
    super(service);
  }
}
