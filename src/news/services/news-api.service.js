import axios from "axios";
import { LogoApiService } from "@/core/services/logo-api.service";
//creamos una constante llamada http, la que almacena el url de la api
const http = axios.create({
    baseURL: 'https://newsapi.org/v2/'
});

export class NewsApiService {
    apiKey = "c3155040f009429a981cdc46ebe0a662"; //insert api here
    logoApi = new LogoApiService();

    //función que nos devuelve las fuentes (MEJORAR)
    getSources() {
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
    }//creamos concatenación para acceder con nuestra apiKey al servicio
     //y nos devuelve ese url a la función que lo necesite

    //retorna el articulo que tiene la fuente
    getArticlesForSource(sourceId) {
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }//nos devuelve el url de la fuente, introduciendo un sourceId para
     //localizarla

    //funcion que nos devuelve el logo de la url ingresando una fuente
    getUrlToLogo(source) {
        return this.logoApi.getUrlToLogo(source);
    }
}