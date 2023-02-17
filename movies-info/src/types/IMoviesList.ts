export interface IMoviesList {
    id: number;
    name: string;
    summary: string;
    language: string;
    ended: string;
    genres: string [];
    image: {
        medium: string;
    };
    network: {
        country: {
            name: string;
        };
    };
    rating: {
        average: number;
    }
}