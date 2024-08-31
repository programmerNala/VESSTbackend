import * as graphql from "@nestjs/graphql";
import { RbacDto } from "./RbacDto";
import { TwoFaDto } from "./TwoFaDto";
import { AuthenticationService } from "./authentication.service";

export class AuthenticationResolver {
  constructor(protected readonly service: AuthenticationService) {}

  @graphql.Mutation(() => Boolean)
  async AssignRole(
    @graphql.Args()
    args: RbacDto
  ): Promise<boolean> {
    return this.service.AssignRole(args);
  }

  @graphql.Mutation(() => String)
  async Generate2FaCode(
    @graphql.Args()
    args: TwoFaDto
  ): Promise<string> {
    return this.service.Generate2FaCode(args);
  }

  @graphql.Query(() => [RbacDto])
  async GetUserPermissions(
    @graphql.Args("args")
    args: string
  ): Promise<RbacDto[]> {
    return this.service.GetUserPermissions(args);
  }

  @graphql.Mutation(() => Boolean)
  async Verify2FaCode(
    @graphql.Args()
    args: TwoFaDto
  ): Promise<boolean> {
    return this.service.Verify2FaCode(args);
  }
}
