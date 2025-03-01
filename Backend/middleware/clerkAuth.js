import { Clerk } from "@clerk/backend";
const clerk = Clerk({
  secretKey: process.env.CLERK_SECRET_KEY,
});

export const clerkAuthMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error("Invalid authorization header");
    }
    const token = authHeader.replace("Bearer", "");
    const session = await clerk.sessions.verify(token);
    req.user = session.user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error: error });
  }
};
