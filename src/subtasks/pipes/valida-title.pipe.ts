import { PipeTransform, BadRequestException } from '@nestjs/common';

export class ValidaTitleSubTaskPipe implements PipeTransform {

  transform(value: any) {
    let teste = value.title.toUpperCase()

    if (teste !== "CHINES") {
      throw new BadRequestException(`Title ("${teste}") is invalid`);
    }

    return value;
  }
}
