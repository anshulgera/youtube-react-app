import axios from 'axios';

const KEY = 'AIzaSyAn4r_B4_gDmhxGTKlYgl1Z4Gm33xfEZTk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});