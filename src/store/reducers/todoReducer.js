const INITIAL_STATE = []

export function todoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'REMOVE_TODO':
            const temp = state.filter( item => item !== action.payload)
            console.log(temp)
            return temp
        default:
            return state
    }
}
