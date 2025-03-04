import { SignUp } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const SignUpPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center"
    >
      <SignUp />
    </motion.div>
  );
};

export default SignUpPage;
