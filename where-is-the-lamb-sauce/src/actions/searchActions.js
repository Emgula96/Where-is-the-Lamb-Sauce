export const clearSearch = (dispatch) => {
    dispatch({ type: "CLEAR_SEARCH_RESULTS" });
}

export const setSearch = (dispatch, data) => {
    dispatch({type:"SET_SEARCH_RESULTS", payload: data.results})
}