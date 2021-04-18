export const defaultState = {
    lists: []
    // JWT: localStorage.getItem('jwt'),
}

const reducer = (state=defaultState, action) => {
    console.log(action)
    let newState = {...state}
    let newLists, idx, name, newItems;
    /* do something with newState*/
    switch(action.type) {
        case "CREATE_LIST":
            const newListName = action.payload.name;
            newLists = [...state.lists,{name:newListName, items:[]}];
            newState = {...newState, lists:newLists};
            return newState;
        case "DELETE_LIST":
            idx = action.payload.idx
            newLists = [...state.lists]
            newLists.splice(idx,1);
            newState = {...newState, lists:newLists};
            return newState
        case "ADD_ITEM":
            idx =  action.payload.idx
            name = action.payload.name
            // newItems = [...newState.lists[idx].items,name]
            //newState.lists[idx].items.push(name)
            newItems = [...newState.lists[idx].items,name]
            newLists = [...newState.lists]
            newLists[idx].items = [...newItems]
            newState = {...newState, lists:newLists};
            return newState
        case "DELETE_ITEM":
            const {listIdx,itemIdx} = action.payload
            newItems = [...newState.lists[listIdx].items]

            // newItems.splice(itemIdx,1)
            // newState.lists[listIdx].items = newList
            newItems = [...newState.lists[listIdx].items.slice(0,itemIdx),
            ...newState.lists[listIdx].items.slice(itemIdx+1)]


            newLists = [...newState.lists]

            newLists[listIdx].items = [...newItems]
            newState = {...newState, lists:newLists};

            return newState;
        default:
            return newState;
    }
}

export default reducer

// loginReducer :{
//     requestInProgress: false,
// }

// requestInProgress:true, make the api call through middleware => side effect

// resp => requestInProgress:false

