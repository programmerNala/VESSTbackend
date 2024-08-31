import { Module } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationResolver } from "./authentication.resolver";

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService, AuthenticationResolver],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
