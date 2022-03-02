const defaultState = []

const ADD_DOG = 'ADD_DOG'
const REMOVE_DOG = 'REMOVE_DOG'
const SET_SAVED_DOGS = 'SET_SAVED_DOGS'

export function addDog(dog) {
    return {
        type: ADD_DOG,
        dog
    }
}

export function removeDog(dog) {
    return {
        type: REMOVE_DOG,
        dog
    }
}


export function setDogs(dogs) {
    return {
        type: SET_SAVED_DOGS,
        dogs
    }
}

//gets dogs from backend
export function fetchDogs(dispatch, getState) {
    const state = getState()
    if (!state.user.currentUser) {
        return
    }
    fetch('/api/v1/dogs')
        .then(res => res.json())
        .then(dogs => {
            dispatch(setDogs(dogs))
        })
}


export function dogReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_SAVED_DOGS:
            return action.dogs
        case ADD_DOG:
            return [
                ...state,
                action.dog
            ]
        case REMOVE_DOG:
            return state.filter((dog) => {
                return dog.id !== action.dog.id
            })

        default:
            return state
    }
}

