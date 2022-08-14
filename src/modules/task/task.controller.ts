import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController{
    constructor(private readonly taskService: TaskService) { }
    
    //Get All Tasks
    //---------------
    @Get()
    allTasks()
    {
        return this.taskService.allTasks()
    }
    
    //Get One Task
    //---------------
    @Get(":taskID")
    getOneTask(@Param("taskID", ParseIntPipe) taskID: number)
    {
        return this.taskService.getOneTask(taskID)
    }


    //Add new Task
    //---------------
    @Post()
    addTask(@Body() task: any)
    {
        return this.taskService.getOneTask(task)
    }

    //Update Task Details
    //---------------------
    @Put(":taskId")
    updateTask(@Param("taskId", ParseIntPipe) taskId: number, @Body() taskDto: any)
    {
        return this.taskService.updateTask(taskId, taskDto)
    }


    //Delete Task
    //---------------
    @Delete(":taskId")
    deleteTask(@Param("taskId", ParseIntPipe) taskId: number)
    {
        return this.taskService.deleteTask(taskId)
    }
}