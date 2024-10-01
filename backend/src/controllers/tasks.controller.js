import { Task } from "../models/tasks.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const getTasks = asyncHandler(async(req, res) =>{

    const tasks = await Task.find();


    return res.status(201).json(
        new ApiResponse(201, tasks, "Tasks Successfully returned")
    )
    
})

const createTasks = asyncHandler( async(req,res) => {
    const { title, description} = req.body;

    if(
        [title, description].some((field) =>
        field?.trim() === "") 
    ){
        throw new ApiError(400, "All field are required")
    }

    const tasks = await Task.create(
        {
            title: title,
            description: description
        }
    )
    await tasks.save()


    return res.status(201).json(
        new ApiResponse(201, tasks, "Tasks Successfully returned")
    )

})
export{
    getTasks,
    createTasks
}
