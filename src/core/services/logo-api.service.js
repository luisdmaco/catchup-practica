//create service for logo here
export class LogoApiService {
    //función que nos devuelve el logo del host de la url
    //aka el logo del proveedor de noticias.
    getUrlToLogo(source) {
        return `https://logo.clearbit.com/${ new URL(source.url).host}`;
    }// concatena el host de la url del source ingresado
}