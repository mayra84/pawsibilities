//@ts-check
import { v4 as uuidv4 } from 'uuid';

const defaultState = {
    logs: [],
    date: ''
     // uuid: ''
}

const SET_HEALTH = 'SET_HEALTH'

export function setHealth(health) {
    return {
        type: SET_HEALTH,
        health
    }
}

//fetch info from backend
export function fetchHealth(dispatch) {
    fetch('/api/v1/health')
        .then(res => res.json())
        .then(health => {
            dispatch(setHealth(health))
        })
}

//can two separate cases work on one thing together? 
export function calendarReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_HEALTH:
            return {
                ...state,
                logs: action.health 
            }
        default:
            return state
    }
} 

