const dataInitial = [];

const weatherReducer = (state=dataInitial, action) => {
    switch (action.type) {
        case 'SEARCH':
            return [...state, action.data];
        default:
            return state;
    }
}

export default weatherReducer;