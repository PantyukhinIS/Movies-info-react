import axios, {AxiosResponse} from "axios";

const getMoviesMain = (): Promise<AxiosResponse> => axios.get('https://api.tvmaze.com/search/shows?q=girls');

export default getMoviesMain;