const workoutService = require("../services/workoutService")

const getAllWorkouts = (req,res)=>{
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({status: "OK", data: allWorkouts});
}

const getOneWorkout = (req,res)=>{
    const getOneWorkout = workoutService.getOneWorkout()
    res.send(`Get one workout ${req.params.workoutId}`)
}

const createNewWorkout = (req,res)=>{
    const {body}= req;

    if (!body.name || !body.mode || !body.equipment || !body.exercices || !body.trainerTips){
        return;
    }   

    const newWorkout ={
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercices: body.exercices,
        trainerTips: body.trainerTips,
    }

    const createdNewWorkout = workoutService.createNewWorkout(newWorkout)
    res.status(201).send({status: "OK", data: createdWorkout})
}

const updateWorkout = (req,res)=>{
    const updateWorkout = workoutService.updateWorkout();
    res.send(`Update workout ${req.params.workoutId}`)
}

const deleteWorkout = (req,res)=>{
    const deleteWorkout = workoutService.deleteWorkout();
    res.send(`Delete workout ${req.params.workoutId}`)
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateWorkout,
    deleteWorkout,
}