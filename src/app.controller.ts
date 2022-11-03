import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger/dist';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { Query } from '@nestjs/common/decorators';
import { ApiQuery } from '@nestjs/swagger/dist/decorators/api-query.decorator';

@ApiTags('users')
@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @ApiOkResponse({type:User,isArray:true})
  @ApiQuery({name: 'name',required:false})
  @Get()
  getUsers(@Query('name') name?: string ): User[] {
    return this.appService.findAll(name);
  }
 
  @ApiOkResponse({type:User,description:"the user is"})
  @ApiNotFoundResponse()
  @Get(':id')
  getUserById(@Param('id',ParseIntPipe) id: number): User {

   const user= this.appService.findById(id);

   if(!user){
    throw new NotFoundException();
   }
   return user;
  }

  @ApiCreatedResponse({type:User})
  @ApiBadRequestResponse()
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.appService.createUser(body);
  }
  
}
