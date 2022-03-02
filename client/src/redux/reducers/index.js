import { combineReducers } from "redux";
import { calendarReducer } from "./calendarReducer"
import { dogReducer } from "./dogReducer";
import { userReducer } from "./userReducer";


const rootReducer = combineReducers({
    user: userReducer,
    dogs: dogReducer,
    calendar: calendarReducer
})

export default rootReducer
