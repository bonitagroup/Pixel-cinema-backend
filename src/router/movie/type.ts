export interface MovieWithDetails {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    director: string | null;
    cast: string | null;
    duration: number;
    releaseDate: Date;
    endDate: Date | null;
    genre: string | null;
    ageRating: string | null;
    format: string | null;
    posterUrl: string | null;
    trailerUrl: string | null;
    isHot: boolean;
    createdAt: Date;
    updatedAt: Date;
}