export interface MovieDTO {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  duration: number;
  releaseDate: Date;
  genre: string | null;
  ageRating: string | null;
  format: string | null;
  posterUrl: string | null;
  trailerUrl: string | null;
  isHot: boolean;
  createdAt: Date;
}
