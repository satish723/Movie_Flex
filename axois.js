import axois from "axois";
const instance=axois.create({ 
    baseUrl:'https://api.themoviedb.org/3',
    headers:{
        "content-type":"application/json",
    },
});
export default instance