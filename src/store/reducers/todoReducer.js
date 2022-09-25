const INITIAL_STATE = []

export function todoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'ALTER_TODO':
            const newState = state
                .map(item => {
                    if (item.id === action.payload.id) {
                        item = action.payload
                    }
                    return item
                })
            return newState
        case 'REMOVE_TODO':
            const temp = state.filter(item => item.id !== action.payload)
            console.log(temp)
            return temp
        default:
            return state
    }
}
