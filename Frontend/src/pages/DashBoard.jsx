import { motion } from "framer-motion";
import { useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import {
  FaPaw,
  FaCalendarAlt,
  FaWeight,
  FaClipboardList,
} from "react-icons/fa";

const Dashboard = () => {
  const { user } = useUser();
  const [pets, setPets] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch pets data
    const fetchPets = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pets", {
          headers: {
            Authorization: `Bearer ${await user.getToken()}`,
          },
        });
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    // Fetch appointments data
    const fetchAppointments = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/appointments", {
          headers: {
            Authorization: `Bearer ${await user.getToken()}`,
          },
        });
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    // Fetch activities data
    const fetchActivities = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/activities", {
          headers: {
            Authorization: `Bearer ${await user.getToken()}`,
          },
        });
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchPets();
    fetchAppointments();
    fetchActivities();
  }, [user]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 p-6"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Welcome, {user?.firstName}
        </h1>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaPaw className="text-blue-500 text-2xl mb-2" />
            <h3 className="text-gray-500 text-sm">Total Pets</h3>
            <p className="text-2xl font-semibold">{pets.length}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaCalendarAlt className="text-green-500 text-2xl mb-2" />
            <h3 className="text-gray-500 text-sm">Upcoming Appointments</h3>
            <p className="text-2xl font-semibold">{appointments.length}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaWeight className="text-purple-500 text-2xl mb-2" />
            <h3 className="text-gray-500 text-sm">Recent Activities</h3>
            <p className="text-2xl font-semibold">{activities.length}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <FaClipboardList className="text-orange-500 text-2xl mb-2" />
            <h3 className="text-gray-500 text-sm">Health Records</h3>
            <p className="text-2xl font-semibold">View All</p>
          </motion.div>
        </div>

        {/* Pet Profiles */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Pets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {pets.map((pet) => (
            <motion.div
              key={pet._id}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow-sm cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {pet.name}
                  </h3>
                  <p className="text-gray-500">{pet.breed}</p>
                  <p className="mt-2 text-gray-600">Age: {pet.age} years</p>
                  <p className="text-gray-600">Weight: {pet.weight} kg</p>
                </div>
                <FaPaw className="text-blue-500 text-2xl" />
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-500">Next appointment:</p>
                <p className="text-blue-600">
                  {appointments.find((app) => app.petId === pet._id)?.date ||
                    "No upcoming appointments"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activities */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Recent Activities
        </h2>
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          {activities.slice(0, 5).map((activity) => (
            <div
              key={activity._id}
              className="flex items-center py-3 border-b last:border-0"
            >
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{activity.type}</p>
                <p className="text-sm text-gray-500">{activity.description}</p>
              </div>
              <p className="text-gray-500">
                {new Date(activity.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
