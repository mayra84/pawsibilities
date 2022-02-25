import { combineReducers } from "redux";
import { calendarReducer } from "./calendarReducer"
import { userReducer } from "./userReducer";


const rootReducer = combineReducers({
    user: userReducer,
    calendar: calendarReducer
})

export default rootReducer
