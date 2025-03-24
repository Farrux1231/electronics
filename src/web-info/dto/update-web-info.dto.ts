import { PartialType } from '@nestjs/mapped-types';
import { CreateWebInfoDto } from './create-web-info.dto';

export class UpdateWebInfoDto extends PartialType(CreateWebInfoDto) {}
