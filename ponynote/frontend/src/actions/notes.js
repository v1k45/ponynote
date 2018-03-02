export const addNote = text => {
    return {
        type: 'ADD_NOTE',
        text
    }
}

export const updateNote = (id, text) => {
    return {
        type: 'UPDATE_NOTE',
        id,
        text
    }
}

export const deleteNote = id => {
    return {
        type: 'DELETE_NOTE',
        id
    }
}
