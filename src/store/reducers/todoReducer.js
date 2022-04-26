const INITIAL_STATE = []

export function todoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        default:
            return state
    }
}
