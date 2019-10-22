import * as Types from '../constant/Actiontypes';
let intial = [];
const searchMusic = (state=intial,action)=>{
    let data = action.data;
    switch (action.type) {
        case Types.SEARCH_TOP_MUSIC:
            return [...data];
    
        default:
            return [...state]
    }

}
export default searchMusic;