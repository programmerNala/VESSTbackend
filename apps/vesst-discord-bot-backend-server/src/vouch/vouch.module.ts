import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VouchModuleBase } from "./base/vouch.module.base";
import { VouchService } from "./vouch.service";
import { VouchController } from "./vouch.controller";
import { VouchGrpcController } from "./vouch.grpc.controller";
import { VouchResolver } from "./vouch.resolver";

@Module({
  imports: [VouchModuleBase, forwardRef(() => AuthModule)],
  controllers: [VouchController, VouchGrpcController],
  providers: [VouchService, VouchResolver],
  exports: [VouchService],
})
export class VouchModule {}
