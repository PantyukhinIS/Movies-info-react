import axios, {AxiosResponse} from "axios";

const getMoviesList = (): Promise<AxiosResponse> => axios.get('https://api.tvmaze.com/shows?q=animals');

export default getMoviesList;