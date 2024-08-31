import { Injectable } from "@nestjs/common";
import { RbacDto } from "./RbacDto";
import { TwoFaDto } from "./TwoFaDto";

@Injectable()
export class AuthenticationService {
  constructor() {}
  async AssignRole(args: RbacDto): Promise<boolean> {
    throw new Error("Not implemented");
  }
  async Generate2FaCode(args: TwoFaDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetUserPermissions(args: string): Promise<RbacDto[]> {
    throw new Error("Not implemented");
  }
  async Verify2FaCode(args: TwoFaDto): Promise<boolean> {
    throw new Error("Not implemented");
  }
}
