import axios from "axios";

export const httpService = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/search?',
  params :{
    api_key :"Mor3JG72rs6cfHsJQtxNAVhSOsi9l0Lz",
    limit : "25" ,
    offset : "0" ,
    rating :"g",
    lang : "en",
  }
})