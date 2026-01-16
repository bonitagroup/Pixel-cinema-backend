import { BannerDTO } from './dto';
import { BannerWithDetails } from './type';

export function mapBannerToDTO(banner: BannerWithDetails): BannerDTO {
  return {
    id: banner.id,
    imageUrl: banner.imageUrl,
    title: banner.title,
    link: banner.link,
    order: banner.order,
  };
}