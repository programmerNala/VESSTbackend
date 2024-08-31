import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmbedModuleBase } from "./base/embed.module.base";
import { EmbedService } from "./embed.service";
import { EmbedController } from "./embed.controller";
import { EmbedGrpcController } from "./embed.grpc.controller";
import { EmbedResolver } from "./embed.resolver";

@Module({
  imports: [EmbedModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmbedController, EmbedGrpcController],
  providers: [EmbedService, EmbedResolver],
  exports: [EmbedService],
})
export class EmbedModule {}
