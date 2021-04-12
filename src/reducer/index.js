const defaultState = {
    lists: [],
}

const reducer = (state=defaultState, action) => {
    let newState = {...state}
    let newLists, idx, name
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
            newState.lists[idx].items.push(name)
            return newState
        case "DELETE_ITEM":
            const {listIdx,itemIdx} = action.payload
            let newList = [...newState.lists[listIdx].items]
            newList.splice(itemIdx,1)
            // newState.lists[listIdx].items = newList
            newLists = [...newState.lists]

            newLists[listIdx].items = newList
            newState = {...newState, lists:newLists};
            return newState;
        default:
            return newState;
    }
}

export default reducer