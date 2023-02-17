import axios, {AxiosResponse} from "axios";

const getMoviesSearch = (value: string): Promise<AxiosResponse> => axios.get(`https://api.tvmaze.com/search/shows?q=${value}`);

export default getMoviesSearch;