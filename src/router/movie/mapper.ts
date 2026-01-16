import { MovieDTO } from './dto';
import { MovieWithDetails } from './type';

export function mapMovieToDTO(movie: MovieWithDetails): MovieDTO {
  return {
    id: movie.id,
    title: movie.title,
    slug: movie.slug,
    description: movie.description,
    duration: movie.duration,
    releaseDate: movie.releaseDate,
    genre: movie.genre,
    ageRating: movie.ageRating,
    format: movie.format,
    posterUrl: movie.posterUrl,
    trailerUrl: movie.trailerUrl,
    isHot: movie.isHot,
    createdAt: movie.createdAt,
  };
}
