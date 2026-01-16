import type { Request, Response } from 'express';
import { prisma } from '../../../lib/prisma';
import { CODES } from '../../../constants/error';
import { mapMovieToDTO } from '../mapper';

export const getAllMovies = async (req: Request, res: Response) => {
  console.log('Get all movies request received');
  try {
    const movies = await prisma.movie.findMany({
      orderBy: { releaseDate: 'desc' },
    });

    const result = movies.map(mapMovieToDTO);
    return res.sendSuccess(result);
  } catch (err) {
    console.error(err);
    return res.sendError(CODES.DB_ERROR);
  }
};
