import axios from 'axios';
import * as Config from './../constant/Config';

export default function callApi(endpoint,limit, method = 'GET', body){
    return axios({
        method: method,
        url: `${Config.API_URL}${endpoint}${limit}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
};