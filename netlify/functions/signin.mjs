import { getDatabase } from "@netlify/database";
import { cleanString, json, methodNotAllowed, publicUser, readForm, verifyPassword } from "./auth-utils.mjs";

export default async (req) => {
  if (req.method !== "POST") {
    return methodNotAllowed();
  }

  try {
    const body = await readForm(req);
    const email = cleanString(body.email).toLowerCase();
    const password = String(body.password || "");

    if (!email || !password) {
      return json({ message: "Please enter your email and password." }, 400);
    }

    const db = getDatabase();
    const [user] = await db.sql`
      SELECT id, username, email, phone, password_hash, password_salt
      FROM app_users
      WHERE email = ${email}
      LIMIT 1
    `;

    if (!user) {
      return json({ message: "login failed" }, 401);
    }

    const isValidPassword = await verifyPassword(password, user.password_salt, user.password_hash);

    if (!isValidPassword) {
      return json({ message: "login failed" }, 401);
    }

    return json({ message: "login successful", user: publicUser(user) });
  } catch (error) {
    console.error("Signin failed", error);
    return json({ message: "Login failed. Please try again." }, 500);
  }
};

export const config = {
  path: "/api/signin",
};
