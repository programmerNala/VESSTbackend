import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TicketService } from "./ticket.service";
import { TicketGrpcControllerBase } from "./base/ticket.grpc.controller.base";

@swagger.ApiTags("tickets")
@common.Controller("tickets")
export class TicketGrpcController extends TicketGrpcControllerBase {
  constructor(protected readonly service: TicketService) {
    super(service);
  }
}
