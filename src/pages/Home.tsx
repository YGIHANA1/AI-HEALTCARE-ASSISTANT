import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Book, AlertCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI-Powered Healthcare Assistant
        </h1>
        <p className="text-xl text-gray-600">
          Your intelligent companion for health guidance and medical information
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Link
          to="/symptom-checker"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Stethoscope className="h-12 w-12 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Symptom Checker</h2>
          <p className="text-gray-600">
            Analyze your symptoms and get AI-powered guidance on potential conditions
          </p>
        </Link>

        <Link
          to="/health-education"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Book className="h-12 w-12 text-green-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Health Education</h2>
          <p className="text-gray-600">
            Access comprehensive medical information and preventive care tips
          </p>
        </Link>

        <Link
          to="/emergency-guide"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Emergency Guide</h2>
          <p className="text-gray-600">
            Quick access to emergency procedures and first aid instructions
          </p>
        </Link>
      </div>

      <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Why Choose Our Platform?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-600">
              Advanced AI algorithms help analyze symptoms and provide accurate guidance
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">24/7 Availability</h3>
            <p className="text-gray-600">
              Access healthcare information and guidance anytime, anywhere
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Educational Resources</h3>
            <p className="text-gray-600">
              Comprehensive library of medical information and preventive care guides
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Emergency Support</h3>
            <p className="text-gray-600">
              Quick access to emergency procedures and local healthcare facilities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;