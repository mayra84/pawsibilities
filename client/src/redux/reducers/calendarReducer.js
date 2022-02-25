//@ts-check
import { v4 as uuidv4 } from 'uuid';

const defaultState = {
    activities: [],
    date: ''
     // uuid: ''
}

const CREATE_TASK = 'CREATE_TASK'
const  COMPLETE_TASK = 'COMPLETE_TASK'

//can pass two arguments
export function createTask(activity, date) {
    return {
        type: CREATE_TASK,
        activity,
        date
    }
}

export function completeTask(uuid) {
    return {
        type: COMPLETE_TASK,
        uuid
    }
}

//can two separate cases work on one thing together? 
export function calendarReducer(state = defaultState, action) {
    switch (action.type) {
        case CREATE_TASK:
            return {
                ...state,
                activities: [ ...state.activities, {
                    activity: action.activity,
                    date: action.date,
                    uuid: uuidv4()
                }]
            }
   
            
        case COMPLETE_TASK: 
            return { 
                ...state,
                activities: state.activities.filter((activity) => {
                    return activity.uuid !== action.uuid
                })
            }
        default:
            return state
    }
} 

// export function createTask(activity) {
//     return {
//         type: CREATE_TASK,
//         activity
       
//     }
// }

// export function createDate(date) {
//     return {
//         type: CREATE_DATE,
//         date
//     }
// }

// export function deleteTask(date) {
//     return {
//         type: DELETE_TASK,
//         date
//     }
// }

