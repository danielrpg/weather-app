import axios from 'axios';
const SEARCH = 'SEARCH';

const search = (data) => ({
    type: SEARCH,
    data
})

export const searchAsc = (cityName) => dispatch => {     
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=d8fd4b26c3e2bbb19145890ff671aedc`)
    .then((response) => dispatch(search(response.data)));
}