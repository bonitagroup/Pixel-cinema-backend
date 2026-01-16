import { Router } from 'express';
import { getActiveBanners } from './controller';

const bannerRouter = Router();

bannerRouter.get('/', getActiveBanners);

export default bannerRouter;