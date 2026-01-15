import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

type DateInput =
    | string
    | number
    | Date
    | dayjs.Dayjs
    | null
    | undefined;

/**
 * VNDate
 * - Input giống Date()
 * - Output là Date (UTC+7)
 */
export function VNDate(input?: DateInput): Date {
    return dayjs(input)
        .tz('Asia/Ho_Chi_Minh')
        .toDate();
}
