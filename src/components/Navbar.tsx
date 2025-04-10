import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-red-500" />
            <span className="text-xl font-bold">HealthCare AI</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/symptom-checker" className="text-gray-700 hover:text-red-500">
              Symptom Checker
            </Link>
            <Link to="/health-education" className="text-gray-700 hover:text-red-500">
              Health Education
            </Link>
            <Link to="/emergency-guide" className="text-gray-700 hover:text-red-500">
              Emergency Guide
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;