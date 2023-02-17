export interface IMoviesMain {
    show: {
        id: number;
        name: string;
        genres: string [];
        image: {
            medium: string;
        };
        network: {
            country: {
                name: string;
            };
        };  
    };
}