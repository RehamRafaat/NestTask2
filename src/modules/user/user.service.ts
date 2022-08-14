import { BadRequestException, Injectable } from "@nestjs/common";
import { TaskService } from "../task/task.service";

let users = [
    {
        id: 1,
        username: "omar",
        password: "1234"
    },
    {
        id: 2,
        username: "ahmad",
        password: "4321"
    },
    {
        id: 3,
        username: "sara",
        password: "abc331"
    },
    {
        id: 4,
        username: "laila",
        password: "sc21"
    },
    {
        id: 5,
        username: "ayman",
        password: "xvewwf"
    }
]

@Injectable()
export class UserService{

    constructor(
        private readonly taskService: TaskService
    ) { }
    

    allUsers()
    {
        return users;
    }


    getUser(userID: number)
    {
        const user = users.filter(user => user.id === userID);
        if (!user)
        {
			throw new BadRequestException('Invalid ID ! no such user with this name');
        }
        else
        {
            const tasks = this.taskService.getUserTasks(userID)
            return {user,tasks}
        }
    }


    addUser(body: any)
    {
        users.push(body)
        return users
    }


    updateUser(userID: number, userDetails: any)
    {
        users= users.map(user=> {
            if(user.id === userID){
                return {
                    ...user,
                    ...userDetails
                }
            }
            return user
        })
        return users;
    }


    deleteUser(userID: number)
    {
        const gotUser = users.find(user => user.id === userID)
        if (!gotUser)
        {
			throw new BadRequestException('Invalid ID ! no such user with this name');
        }
        else
        {
            users = users.filter(user => user.id !== gotUser.id);
		    return users;
        }
    }
}