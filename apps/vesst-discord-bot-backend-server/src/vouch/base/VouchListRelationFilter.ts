/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VouchWhereInput } from "./VouchWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class VouchListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => VouchWhereInput,
  })
  @ValidateNested()
  @Type(() => VouchWhereInput)
  @IsOptional()
  @Field(() => VouchWhereInput, {
    nullable: true,
  })
  every?: VouchWhereInput;

  @ApiProperty({
    required: false,
    type: () => VouchWhereInput,
  })
  @ValidateNested()
  @Type(() => VouchWhereInput)
  @IsOptional()
  @Field(() => VouchWhereInput, {
    nullable: true,
  })
  some?: VouchWhereInput;

  @ApiProperty({
    required: false,
    type: () => VouchWhereInput,
  })
  @ValidateNested()
  @Type(() => VouchWhereInput)
  @IsOptional()
  @Field(() => VouchWhereInput, {
    nullable: true,
  })
  none?: VouchWhereInput;
}
export { VouchListRelationFilter as VouchListRelationFilter };
