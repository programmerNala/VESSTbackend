import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EntertainmentService } from "./entertainment.service";
import { EntertainmentGrpcControllerBase } from "./base/entertainment.grpc.controller.base";

@swagger.ApiTags("entertainments")
@common.Controller("entertainments")
export class EntertainmentGrpcController extends EntertainmentGrpcControllerBase {
  constructor(protected readonly service: EntertainmentService) {
    super(service);
  }
}
