export interface BannerWithDetails {
    id: number;
    imageUrl: string;
    title: string | null;
    link: string | null;
    order: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}