export const addTodo = (payload) => {
    return {
        type: "ADD_TODO",
        payload
    }
}

export const removeTodo = (payload) => {
    return {
        type: "REMOVE_TODO",
        payload
    }
}