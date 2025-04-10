import React from 'react';
import { AlertTriangle, Phone } from 'lucide-react';

const EmergencyGuide = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-8">
        <div className="flex">
          <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
          <div>
            <p className="font-bold text-red-700">Emergency Services</p>
            <p className="text-red-700">
              If you're experiencing a medical emergency, immediately call your local emergency number.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Common Emergencies</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Heart Attack</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Chest pain or pressure</li>
                <li>Shortness of breath</li>
                <li>Pain in arms, neck, or jaw</li>
                <li>Call emergency services immediately</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Stroke</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Face drooping</li>
                <li>Arm weakness</li>
                <li>Speech difficulty</li>
                <li>Time to call emergency</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">First Aid Steps</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Bleeding</h3>
              <ol className="list-decimal list-inside text-gray-700">
                <li>Apply direct pressure</li>
                <li>Elevate the wound</li>
                <li>Apply clean bandage</li>
                <li>Seek medical attention</li>
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Burns</h3>
              <ol className="list-decimal list-inside text-gray-700">
                <li>Cool with running water</li>
                <li>Remove tight items</li>
                <li>Cover with sterile gauze</li>
                <li>Don't break blisters</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Phone className="h-6 w-6 text-green-500 mr-2" />
          <h2 className="text-2xl font-bold">Emergency Contacts</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold">Emergency Services</h3>
            <p className="text-xl font-bold text-red-500">911</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold">Poison Control</h3>
            <p className="text-xl font-bold text-red-500">1-800-222-1222</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyGuide;