import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { Module } from "@nestjs/common";
import { TaskModule } from "../task/task.module";

@Module({
    imports:[TaskModule],
    controllers:[UserController],
    providers:[UserService],
    exports:[]
})

export class UserModule{}