import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmbedService } from "./embed.service";
import { EmbedGrpcControllerBase } from "./base/embed.grpc.controller.base";

@swagger.ApiTags("embeds")
@common.Controller("embeds")
export class EmbedGrpcController extends EmbedGrpcControllerBase {
  constructor(protected readonly service: EmbedService) {
    super(service);
  }
}
