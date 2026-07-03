import { getDatabase } from "@netlify/database";
import { cleanString, hashPassword, json, methodNotAllowed, publicUser, readForm } from "./auth-utils.mjs";

export default async (req) => {
  if (req.method !== "POST") {
    return methodNotAllowed();
  }

  try {
    const body = await readForm(req);
    const username = cleanString(body.username);
    const email = cleanString(body.email).toLowerCase();
    const password = String(body.password || "");
    const phone = cleanString(body.phone);

    if (!username || !email || !password || !phone) {
      return json({ message: "Please fill in all fields." }, 400);
    }

    if (!email.includes("@")) {
      return json({ message: "Please enter a valid email address." }, 400);
    }

    if (password.length < 4) {
      return json({ message: "Password must be at least 4 characters." }, 400);
    }

    const db = getDatabase();
    const existing = await db.sql`SELECT id FROM app_users WHERE email = ${email} LIMIT 1`;

    if (existing.length > 0) {
      return json({ message: "An account with this email already exists." }, 409);
    }

    const { hash, salt } = await hashPassword(password);
    const [user] = await db.sql`
      INSERT INTO app_users (username, email, password_hash, password_salt, phone)
      VALUES (${username}, ${email}, ${hash}, ${salt}, ${phone})
      RETURNING id, username, email, phone
    `;

    return json({ message: "signup successful", user: publicUser(user) }, 201);
  } catch (error) {
    console.error("Signup failed", error);
    return json({ message: "Signup failed. Please try again." }, 500);
  }
};

export const config = {
  path: "/api/signup",
};
