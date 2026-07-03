import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(scryptCallback);
const keyLength = 64;

export const json = (body, status = 200) =>
  Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });

export const methodNotAllowed = () => json({ message: "Method not allowed" }, 405);

export const cleanString = (value) => String(value || "").trim();

export const readForm = async (req) => {
  const contentType = req.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return req.json();
  }

  const form = await req.formData();
  return Object.fromEntries(form.entries());
};

export const publicUser = (user) => ({
  user_id: user.id,
  username: user.username,
  email: user.email,
  phone: user.phone,
});

export const hashPassword = async (password) => {
  const salt = randomBytes(16).toString("hex");
  const derivedKey = await scrypt(password, salt, keyLength);

  return {
    hash: derivedKey.toString("hex"),
    salt,
  };
};

export const verifyPassword = async (password, salt, hash) => {
  const storedHash = Buffer.from(hash, "hex");
  const suppliedHash = await scrypt(password, salt, keyLength);

  if (storedHash.length !== suppliedHash.length) {
    return false;
  }

  return timingSafeEqual(storedHash, suppliedHash);
};
