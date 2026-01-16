import type { Request, Response } from 'express';
import { prisma } from '../../../lib/prisma';
import { CODES } from '../../../constants/error';
import { mapBannerToDTO } from '../mapper';

export const getActiveBanners = async (req: Request, res: Response) => {
  try {
    const banners = await prisma.banner.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' },
    });

    const result = banners.map(mapBannerToDTO);
    return res.sendSuccess(result);
  } catch (err) {
    console.error(err);
    return res.sendError(CODES.DB_ERROR);
  }
};
