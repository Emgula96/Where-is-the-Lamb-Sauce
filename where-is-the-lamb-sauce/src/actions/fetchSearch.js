const fetchSearch = async (dispatch, APIkey, e) => {
    e.preventDefault()
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIkey}}&cuisine=${e.target.cuisine.value}&type=${e.target.type.value}&number=50&query=${e.target.keywords.value}`
    const res = await fetch(url)
    const searchData = await res.json();
    dispatch({ type: 'SET_SEARCH', payload: searchData });
    console.log('search data:', searchData);
};

export default fetchSearch
