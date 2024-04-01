const Workout = require("../database/workout")
const {v4: uuid} = require('uuid')

const getAllWorkouts = () =>{
    const allWorkouts= Workout.getAllWorkouts();
    return allWorkouts;
}
const getOneWorkout = () =>{

}
const createNewWorkout = (newWorkout) =>{
    const workoutToInsert={
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleDateString("en-US", {timezone: "UTC"}),
        updateAt: new Date().toLocaleDateString("en-US", {timezone: "UTC"})
    }
    const createdNewWorkout = Workout.createNewWorkout(workoutToInsert);
    return createNewWorkout;
}
const updateWorkout = () => {

}
const deleteWorkout = () =>{

}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateWorkout,
    deleteWorkout,
}