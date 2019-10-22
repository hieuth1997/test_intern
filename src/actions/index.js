import * as Types from './../constant/Actiontypes';
import callApi from './../utils/apiCaller'

 export const actFetchTopSong = () =>{
    return dispatch => {
        return callApi('top-song','&limit=8','GET',null).then(res=>{
            let data = res.data.results;
            console.log(data)
            dispatch(actTopSong(data))
        })
    }

}
export const actTopSong =  (data) =>{
    return {
        type : Types.FETCH_TOP_MUSIC,
        data : data

    }
}
// search song... 
export const actRequestSearchSong = (content) =>{
    return dispatch => {
        return callApi(content,'&limit=15','GET',null).then(res=>{
            console.log(res.data)
            dispatch(actSearchSong(res.data.results))
        })
    }

}
export const actSearchSong =  (data) =>{
    return {
        type : Types.SEARCH_TOP_MUSIC,
        data : data

    }
}