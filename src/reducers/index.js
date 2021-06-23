import { initialState } from "../store"

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_JOB_TO_FAVS":
            return { ...state, favorites: [...state.favorites, action.payload] }

        case "REMOVE_JOB_FROM_FAVS":
            const modifiedFavs = [...state.favorites.filter(item => item.id !== action.payload.id)]
            return { ...state, favorites: modifiedFavs }

        default:
            return state
    }
}

export default mainReducer
