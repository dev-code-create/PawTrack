import { motion } from "framer-motion";
import { FaPaw, FaCalendarAlt, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const HomePage = () => {
  return (
    <motion.div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow-md py-4 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <FaPaw className="text-blue-600 text-3xl" />
            <span className="text-2xl font-bold text-gray-800">PawTrack</span>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center space-x-6"
          >
            <button className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </button>
            <button className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <ThemeToggle />
          </motion.div>
        </div>
      </nav>

      <main className="container mx-auto px-8 py-12">
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Keep Track of Your Pet's Well-being
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Monitor activities, schedule appointments, and manage your pet's
            health all in one place.
          </p>
          <Link to="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white text-lg px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Start Tracking Now
            </motion.button>
          </Link>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <FaPaw className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Activity Tracking</h3>
            <p className="text-gray-600">
              Log walks, playtime, and training sessions to ensure your pet
              stays active and healthy.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <FaCalendarAlt className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Appointment Management
            </h3>
            <p className="text-gray-600">
              Never miss a vet visit or grooming session with our smart
              scheduling system.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <FaClipboardList className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Health Records</h3>
            <p className="text-gray-600">
              Keep vaccination records, medical history, and important documents
              in one secure place.
            </p>
          </motion.div>
        </motion.section>
      </main>
    </motion.div>
  );
};
//

export default HomePage;
