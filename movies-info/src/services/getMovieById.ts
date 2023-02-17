import axios, {AxiosResponse} from "axios";

const getMovieById = (id: string): Promise<AxiosResponse> => axios.get(`https://api.tvmaze.com/shows/${id}`);

export default getMovieById;