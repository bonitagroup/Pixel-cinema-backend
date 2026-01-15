export const CODES = {
  /**
   * =========================
   * SUCCESS
   * =========================
   */
  SUCCESS: 0,

  /**
   * =========================
   * AUTHENTICATION / AUTHORIZATION (1000–1099)
   * Dùng cho: login, token, session, permission
   * =========================
   */
  INVALID_TOKEN: 1001, // Token không hợp lệ
  EXPIRED_TOKEN: 1002, // Token hết hạn
  INVALID_REFRESH_TOKEN: 1003, // Refresh token sai
  UNAUTHORIZED: 1004, // Chưa đăng nhập
  FORBIDDEN: 1005, // Không đủ quyền

  /**
   * =========================
   * VALIDATION / INPUT (2000–2099)
   * Dùng cho: request body, params, query
   * =========================
   */
  VALIDATION_ERROR: 2001, // Validate tổng quát
  MISSING_FIELD: 2002, // Thiếu field bắt buộc
  INVALID_FORMAT: 2003, // Sai kiểu dữ liệu / format
  NOT_FOUND: 2004, // Không tìm thấy resource
  DUPLICATE: 2005, // Trùng dữ liệu
  INVALID_PARAMS: 2006, // Tham số không hợp lệ

  /**
   * =========================
   * BUSINESS RULE – GENERIC (2100–2199)
   * Dùng chung cho mọi nghiệp vụ
   * =========================
   */
  EXPIRED: 2101, // Hết hạn (voucher, otp, session, link, token logic…)
  NOT_STARTED: 2102, // Chưa tới thời điểm cho phép
  OUT_OF_STOCK: 2103, // Hết quota / số lượng / slot
  ALREADY_EXISTS: 2104, // Đã tồn tại / đã thực hiện rồi
  LIMIT_EXCEEDED: 2106, // Vượt quá giới hạn
  TOO_LARGE: 2105, // Quá lớn (kích thước file, dung lượng, số lượng phần tử,…)
  NOT_ALLOWED: 2107, // Không cho phép không hợp lệ (hành động, trạng thái, thao tác,…)
  TYPE_NOT_ALLOWED: 2108, // Loại không được phép
  FAILED: 2109, // Thao tác không thành công

  /**
   * =========================
   * USER DOMAIN (3000–3099)
   * =========================
   */
  USER_NOT_FOUND: 3001,
  USER_ALREADY_EXISTS: 3002,
  USER_INACTIVE: 3003,

  /**
   * =========================
   * DATABASE (4000–4099)
   * =========================
   */
  DB_ERROR: 4001, // Lỗi DB không xác định
  DB_DUPLICATE: 4002, // Trùng unique
  DB_NOT_FOUND: 4003, // Không có record
  PHONE_NUMBER_ALREADY_EXISTS: 4004, // Số điện thoại đã tồn tại

  /**
   * =========================
   * EXTERNAL SERVICES (5000–5099)
   * =========================
   */
  ZALO_API_ERROR: 5001,
  GOOGLE_API_ERROR: 5002,
  EXTERNAL_SERVICE_ERROR: 5003,

  /**
   * =========================
   * RATE LIMIT (6000–6099)
   * =========================
   */
  RATE_LIMITED: 6001,

  /**
   * =========================
   * NETWORK / SYSTEM
   * =========================
   */
  NETWORK_ERROR: 10000, // Lỗi network phía client
  UNKNOWN_ERROR: 9999, // Lỗi không xác định
} as const;

export type ErrorCode = (typeof CODES)[keyof typeof CODES];

export const ERROR_MESSAGES: Record<ErrorCode, string> = {
  [CODES.SUCCESS]: 'Success',

  // Auth
  [CODES.INVALID_TOKEN]: 'Invalid token',
  [CODES.EXPIRED_TOKEN]: 'Token expired',
  [CODES.INVALID_REFRESH_TOKEN]: 'Invalid refresh token',
  [CODES.UNAUTHORIZED]: 'Unauthorized',
  [CODES.FORBIDDEN]: 'Access denied',

  // Validation
  [CODES.VALIDATION_ERROR]: 'Validation error',
  [CODES.MISSING_FIELD]: 'Missing required field',
  [CODES.INVALID_FORMAT]: 'Invalid data format',
  [CODES.NOT_FOUND]: 'Not found',
  [CODES.DUPLICATE]: 'Duplicate data',
  [CODES.INVALID_PARAMS]: 'Invalid parameters',

  // Business – Generic
  [CODES.EXPIRED]: 'Resource has expired',
  [CODES.NOT_STARTED]: 'Resource not available yet',
  [CODES.OUT_OF_STOCK]: 'Resource is out of stock',
  [CODES.ALREADY_EXISTS]: 'Resource already exists',
  [CODES.LIMIT_EXCEEDED]: 'Limit exceeded',
  [CODES.TOO_LARGE]: 'Resource is too large',
  [CODES.NOT_ALLOWED]: 'Action not allowed',
  [CODES.TYPE_NOT_ALLOWED]: 'Type not allowed',
  [CODES.FAILED]: 'Operation failed',

  // User
  [CODES.USER_NOT_FOUND]: 'User not found',
  [CODES.USER_ALREADY_EXISTS]: 'User already exists',
  [CODES.USER_INACTIVE]: 'User is inactive',

  // Database
  [CODES.DB_ERROR]: 'Database error',
  [CODES.DB_DUPLICATE]: 'Duplicate entry',
  [CODES.DB_NOT_FOUND]: 'Record not found',
  [CODES.PHONE_NUMBER_ALREADY_EXISTS]: 'Phone number already exists',

  // External
  [CODES.ZALO_API_ERROR]: 'Zalo API error',
  [CODES.GOOGLE_API_ERROR]: 'Google API error',
  [CODES.EXTERNAL_SERVICE_ERROR]: 'External service error',

  // Rate limit
  [CODES.RATE_LIMITED]: 'Too many requests. Please try again later.',

  // Network / Server
  [CODES.NETWORK_ERROR]: 'Network error',
  [CODES.UNKNOWN_ERROR]: 'Unknown error',
};

export const ERROR_HTTP_STATUS: Record<ErrorCode, number> = {
  [CODES.SUCCESS]: 200,

  // Auth
  [CODES.INVALID_TOKEN]: 401,
  [CODES.EXPIRED_TOKEN]: 401,
  [CODES.INVALID_REFRESH_TOKEN]: 400,
  [CODES.UNAUTHORIZED]: 401,
  [CODES.FORBIDDEN]: 403,

  // Validation
  [CODES.VALIDATION_ERROR]: 400,
  [CODES.MISSING_FIELD]: 400,
  [CODES.INVALID_FORMAT]: 400,
  [CODES.NOT_FOUND]: 404,
  [CODES.DUPLICATE]: 409,
  [CODES.INVALID_PARAMS]: 400,

  // Business – Generic
  [CODES.EXPIRED]: 400,
  [CODES.NOT_STARTED]: 400,
  [CODES.OUT_OF_STOCK]: 409,
  [CODES.ALREADY_EXISTS]: 409,
  [CODES.LIMIT_EXCEEDED]: 400,
  [CODES.TOO_LARGE]: 400,
  [CODES.NOT_ALLOWED]: 400,
  [CODES.TYPE_NOT_ALLOWED]: 400,
  [CODES.FAILED]: 400,

  // User
  [CODES.USER_NOT_FOUND]: 404,
  [CODES.USER_ALREADY_EXISTS]: 409,
  [CODES.USER_INACTIVE]: 403,

  // Database
  [CODES.DB_ERROR]: 500,
  [CODES.DB_DUPLICATE]: 409,
  [CODES.DB_NOT_FOUND]: 404,
  [CODES.PHONE_NUMBER_ALREADY_EXISTS]: 409,

  // External
  [CODES.ZALO_API_ERROR]: 502,
  [CODES.GOOGLE_API_ERROR]: 502,
  [CODES.EXTERNAL_SERVICE_ERROR]: 502,

  // Rate limit
  [CODES.RATE_LIMITED]: 429,

  // Network / Server
  [CODES.NETWORK_ERROR]: 0,
  [CODES.UNKNOWN_ERROR]: 500,
};
