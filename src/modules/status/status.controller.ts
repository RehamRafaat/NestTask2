import {Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController{

    constructor(private readonly statusService: StatusService) { }
    
    //Get all Tasks Status
    //-------------------
    @Get()
    statusOfAllTasks()
    {
        return this.statusService.statusOfAllTasks()
    }
    
    //Get specific Task Status
    //-------------------
    @Get(":statusID")
    statusOfOneTask(@Param("statusID", ParseIntPipe) statusID:number)
    {
        return this.statusService.statusOfOneTask(statusID)
    }
}