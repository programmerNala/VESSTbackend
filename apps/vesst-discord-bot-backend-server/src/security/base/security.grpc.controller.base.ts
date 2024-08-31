/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { SecurityService } from "../security.service";
import { SecurityCreateInput } from "./SecurityCreateInput";
import { SecurityWhereInput } from "./SecurityWhereInput";
import { SecurityWhereUniqueInput } from "./SecurityWhereUniqueInput";
import { SecurityFindManyArgs } from "./SecurityFindManyArgs";
import { SecurityUpdateInput } from "./SecurityUpdateInput";
import { Security } from "./Security";

export class SecurityGrpcControllerBase {
  constructor(protected readonly service: SecurityService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Security })
  @GrpcMethod("SecurityService", "createSecurity")
  async createSecurity(
    @common.Body() data: SecurityCreateInput
  ): Promise<Security> {
    return await this.service.createSecurity({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        action: true,
        createdAt: true,
        date: true,
        id: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Security] })
  @ApiNestedQuery(SecurityFindManyArgs)
  @GrpcMethod("SecurityService", "securities")
  async securities(@common.Req() request: Request): Promise<Security[]> {
    const args = plainToClass(SecurityFindManyArgs, request.query);
    return this.service.securities({
      ...args,
      select: {
        action: true,
        createdAt: true,
        date: true,
        id: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Security })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("SecurityService", "security")
  async security(
    @common.Param() params: SecurityWhereUniqueInput
  ): Promise<Security | null> {
    const result = await this.service.security({
      where: params,
      select: {
        action: true,
        createdAt: true,
        date: true,
        id: true,
        status: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Security })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("SecurityService", "updateSecurity")
  async updateSecurity(
    @common.Param() params: SecurityWhereUniqueInput,
    @common.Body() data: SecurityUpdateInput
  ): Promise<Security | null> {
    try {
      return await this.service.updateSecurity({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          action: true,
          createdAt: true,
          date: true,
          id: true,
          status: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Security })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("SecurityService", "deleteSecurity")
  async deleteSecurity(
    @common.Param() params: SecurityWhereUniqueInput
  ): Promise<Security | null> {
    try {
      return await this.service.deleteSecurity({
        where: params,
        select: {
          action: true,
          createdAt: true,
          date: true,
          id: true,
          status: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}