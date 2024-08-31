import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EntertainmentModuleBase } from "./base/entertainment.module.base";
import { EntertainmentService } from "./entertainment.service";
import { EntertainmentController } from "./entertainment.controller";
import { EntertainmentGrpcController } from "./entertainment.grpc.controller";
import { EntertainmentResolver } from "./entertainment.resolver";

@Module({
  imports: [EntertainmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [EntertainmentController, EntertainmentGrpcController],
  providers: [EntertainmentService, EntertainmentResolver],
  exports: [EntertainmentService],
})
export class EntertainmentModule {}
