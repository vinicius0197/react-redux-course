import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 87afc530dc07d028abfe9a8232bf2ddecafd5c574140b7d177299e0c93139a34'
  }
});