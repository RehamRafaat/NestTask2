import { Injectable } from "@nestjs/common";

let status = [
    {
        id: 1,
        title: "Completed"
    },
    {
        id: 2,
        title: "Pending"
    }
]

@Injectable()
export class StatusService{

    statusOfAllTasks(){
        return status;
    }
    statusOfOneTask(statusID:number){
        return status.filter(status=>status.id === statusID)
    }
}