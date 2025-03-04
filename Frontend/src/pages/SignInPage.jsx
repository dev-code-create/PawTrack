import { SignIn } from "@clerk/clerk-react";
import { motion } from "framer-motion";
const SignInPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opcaity: 1 }}
      exit={{ opacity: 0 }}
      className="min-gh-screen flex items-center"
    >
      <SignIn />
    </motion.div>
  );
};
export default SignInPage;
