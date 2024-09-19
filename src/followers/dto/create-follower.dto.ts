import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateFollowerDto {
  @ApiProperty()
  @IsInt()
  followerId: number;
  @ApiProperty()
  @IsInt()
  followedId: number;

}
