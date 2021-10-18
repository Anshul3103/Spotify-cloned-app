export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQBfHdTQJP1jZHNi__e7087f3FjJeh-MPAP6kPK6JOkkAy-3vhyGOILkAHwpP3NSN6_hEiO7wvi4oYnjvs7Zx6-ia-KHJH6d0L6A4Cz0hUL7713FD_XGsyKNZ7zpyxoBTZFnJiKr-mBdNzZw9mj4DobRsycvk6E__8iP3QaA_YqkqXOj",
}
const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;