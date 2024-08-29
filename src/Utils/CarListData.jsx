import { FaCar, FaTruck, FaStar, FaBatteryFull, FaLeaf } from 'react-icons/fa';

export const CarListData = [
  {
    id: 1,
    name: "Economy",
    seat: 4,
    desc: "Affordable rides for everyday travel",
    amount: 7,
    icon: <FaCar />,
    backgroundColor: "#e0f7fa"  // Light blue background
  },
  {
    id: 2,
    name: "Comfort",
    seat: 4,
    desc: "Newer cars with extra legroom",
    amount: 8,
    icon: <FaStar />,
    backgroundColor: "#f1f8e9"  // Light green background
  },
  {
    id: 3,
    name: "Luxury",
    seat: 4,
    desc: "High-end cars for a premium experience",
    amount: 22,
    icon: <FaLeaf />,
    backgroundColor: "#fff3e0"  // Light orange background
  },
  {
    id: 4,
    name: "SUV",
    seat: 6,
    desc: "Spacious rides for larger groups",
    amount: 14,
    icon: <FaTruck />,
    backgroundColor: "#fce4ec"  // Light pink background
  },
  {
    id: 5,
    name: "Electric",
    seat: 10,
    desc: "Eco-friendly rides with zero emissions",
    amount: 1.8,
    icon: <FaBatteryFull />,
    backgroundColor: "#e8f5e9"  // Light green background
  }
];
