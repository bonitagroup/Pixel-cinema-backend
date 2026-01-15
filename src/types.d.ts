import { VoucherProgram, VoucherDiscountKind, VoucherStatus } from '../generated/prisma/enums';

export interface PaginatedResponseDTO<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface SortQuery {
  field?: string;
  order?: 'asc' | 'desc';
};
