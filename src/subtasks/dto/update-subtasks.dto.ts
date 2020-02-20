import { ApiProperty } from "@nestjs/swagger";

export class UpdateSubtasksDto {
  @ApiProperty({
    required: false
  })
  title: string;

  @ApiProperty({
    required: false
  })
  description: string;
}
