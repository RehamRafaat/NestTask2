import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController{
    constructor(private readonly userService:UserService){}
    
    //get one user 
    //------------------
    @Get(":userID")
    getUser(@Param("userID", ParseIntPipe) userID: number)
    {
        return this.userService.getUser(userID)
    }

    //get all users
    //------------------
    @Get()
    allUsers()
    {
        return this.userService.allUsers()
    }

    //add one user 
    //------------------
    @Post()
    addUser(@Body() user: any)
    {
        return this.userService.addUser(user)
    }

    //update user 
    //------------------
    @Put(":userID")
    updateUser(@Param("userID", ParseIntPipe) userID: number, @Body() userDetails: any)
    {
        return this.userService.updateUser(userID, userDetails)
    }

    //delete user 
    //------------------
    @Delete(":userID")
    deleteUser(@Param("userID", ParseIntPipe) userID: number)
    {
        return this.userService.deleteUser(userID)
    }
}