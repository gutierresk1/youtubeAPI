import axios from 'axios';

const KEY = 'AIzaSyAwfD3KkxvjNihs6xz_eRN7J9y1pcrSPDo';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        maxResults: 5, 
        key: KEY
    }
});
