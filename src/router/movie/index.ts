import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth';
import { getAllMovies } from './controller';

const movieRouter = Router();

movieRouter.get('/movie', authMiddleware({ allowNext: true }), getAllMovies);

export default movieRouter;
