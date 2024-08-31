import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VouchService } from "./vouch.service";
import { VouchGrpcControllerBase } from "./base/vouch.grpc.controller.base";

@swagger.ApiTags("vouches")
@common.Controller("vouches")
export class VouchGrpcController extends VouchGrpcControllerBase {
  constructor(protected readonly service: VouchService) {
    super(service);
  }
}
