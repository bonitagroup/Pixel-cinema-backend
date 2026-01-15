import axios from "axios";
import crypto from "crypto";
import { config } from "../config/index";

const calculateHmacSHA256 = (data: string, secretKey: string): string => {
  return crypto.createHmac("sha256", secretKey).update(data).digest("hex");
};

export const getZaloUserInfo = async (accessToken: string) => {
  try {
    const response = await axios.get("https://graph.zalo.me/v2.0/me", {
      headers: {
        access_token: accessToken,
        appsecret_proof: calculateHmacSHA256(
          accessToken,
          config.ZALO_APP_SECRET
        ),
      },
      params: {
        qs: { fields: "id,name,birthday,picture" },
        json: true,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Zalo API Error:", error.response?.data || error.message);
    return null;
  }
};

export const getZaloPhoneNumber = async (
  accessToken: string,
  accessPhoneToken: string
) => {
  try {
    const response = await axios.get("https://graph.zalo.me/v2.0/me/info", {
      headers: {
        access_token: accessToken,
        code: accessPhoneToken,
        secret_key: config.ZALO_APP_SECRET,
      },
    });
    return response.data.data.number;
  } catch (error: any) {
    console.error("Zalo API Error:", error.response?.data || error.message);
    return null;
  }
};

export const getZaloLocation = async (
  accessToken: string,
  locationToken: string
) => {
  try {
    const response = await axios.get("https://graph.zalo.me/v2.0/me/info", {
      headers: {
        access_token: accessToken,
        code: locationToken,
        secret_key: config.ZALO_APP_SECRET,
      },
    });

    if (response.data?.error !== 0) {
      return null;
    }

    return response.data.data;
  } catch (err) {
    console.error("Zalo Location API Error:", err);
    return null;
  }
};
