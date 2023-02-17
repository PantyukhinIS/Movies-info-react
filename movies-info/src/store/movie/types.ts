import { IMoviesList } from "types/IMoviesList";

export interface IStore {
    list: IMoviesList | null,
}