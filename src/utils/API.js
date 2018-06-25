import axios from "axios";

export default {
    getImages: function (){
        return axios.get("https://dog.ceo/api/breeds/image/random")
    }
};