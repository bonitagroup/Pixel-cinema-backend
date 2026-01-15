import { z } from 'zod';
import { VNDate } from './date';

/**
 * Chuẩn hoá số điện thoại Việt Nam về dạng: 84xxxxxxxxx
 */
export function normalizeVietnamPhone(phone: string): string | null {
  if (!phone) return null;

  // 1. Bỏ khoảng trắng, dấu chấm, gạch
  let p = phone.replace(/[\s.-]/g, "");

  // 2. Bỏ dấu +
  if (p.startsWith("+")) {
    p = p.slice(1);
  }

  // 3. Nếu bắt đầu bằng 0 → thay bằng 84
  if (p.startsWith("0")) {
    p = "84" + p.slice(1);
  }

  // 4. Nếu chưa có mã quốc gia (vd: 352...) → thêm 84
  if (!p.startsWith("84")) {
    p = "84" + p;
  }

  // 5. Validate độ dài (VN: 84 + 9 số)
  if (!/^84\d{9}$/.test(p)) {
    return null;
  }

  return p;
}

export const TableQuerySchema = z.object({
  search: z.string().optional(),

  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),

  sort: z.array(
    z.object({
      field: z.string(),
      order: z.enum(['asc', 'desc']),
    })
  ).optional(),

  filters: z.record(
    z.string(),
    z.array(
      z.union([
        z.string(),
        z.coerce.boolean(),
        z.coerce.number(),
      ])
    )
  ).optional(),
});

export function startOfUTCDay(d = VNDate()) {
  return VNDate(Date.UTC(
    d.getUTCFullYear(),
    d.getUTCMonth(),
    d.getUTCDate()
  ));
}

export function endOfUTCDay(d = VNDate()) {
  return VNDate(Date.UTC(
    d.getUTCFullYear(),
    d.getUTCMonth(),
    d.getUTCDate(),
    23, 59, 59, 999
  ));
}

export const isValidDate = (v: any) => Number.isFinite(VNDate(v).valueOf());

export function getBrandAbbr(input: string): string {
    if (!input) return "";

    const words = input
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    let result = "";

    if (words.length >= 3) {
        // 3 từ trở lên → lấy chữ cái đầu của 3 từ
        result = words.slice(0, 3).map(w => w[0]).join("");
    } else if (words.length === 2) {
        // 2 từ → 1 chữ từ từ 1 + 2 chữ từ từ 2
        result = words[0][0] + words[1].slice(0, 2);
    } else if (words.length === 1) {
        // 1 từ → 3 chữ cái đầu
        result = words[0].slice(0, 3);
    }

    return result.toUpperCase();
}

export function getLatLngMinMax(
    lat: number,
    lng: number,
    distanceKm: number
) {
    // 1 độ latitude ≈ 111 km
    const latDelta = distanceKm / 111;

    // longitude phụ thuộc latitude
    const lngDelta =
        distanceKm / (111 * Math.cos(lat * Math.PI / 180));

    return {
        minLat: lat - latDelta,
        maxLat: lat + latDelta,
        minLng: lng - lngDelta,
        maxLng: lng + lngDelta,
    };
}