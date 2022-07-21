export const initialValueReducer = [];

export const todoTaskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO_TASK': {
            const {todotask} = action.payload;

            if(!todotask) return [...state]

            const idFromDate = JSON.stringify(new Date()).slice(21, -1);

            return [...state, {id:idFromDate, todotask}]
        };
        case 'DELETE_TODO_TASK': {};
        case 'CLEAR_TODO': {};
        default: return state;
    }
}

