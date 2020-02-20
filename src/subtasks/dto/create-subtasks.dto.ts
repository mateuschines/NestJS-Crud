import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSubtasksDto {
  @ApiProperty({
    description: 'O titulo de uma subTarefa'
  })
  @IsNotEmpty({ message: 'Title is not null!!!' })
  title: string;

  @ApiProperty({
    description: 'A descricao de uma subTarefa',
    required: false
  })
  description: string;
}
