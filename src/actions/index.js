export const createList = (listName) => {
    return {
        type: "CREATE_LIST",
        payload: {
            name:listName
        }
    }
}

export const deleteList = (idx) => {
    return {
        type: "DELETE_LIST",
        payload: {
            idx: idx
        }
    }
}

export const addItem = (idx, itemName) => {
    return {
        type: "ADD_ITEM",
        payload:{
            idx: idx,
            name:itemName
        }
    }
}

export const deleteItem = (listIdx, itemIdx) => {
    return {
        type: "DELETE_ITEM",
        payload:{
            listIdx,
            itemIdx
        }
    }
}
