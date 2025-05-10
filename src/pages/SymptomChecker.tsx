import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import axios from 'axios';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post('http://127.0.0.1:3000/api/analyze-symptoms', {
        symptoms
      });

      setResult(response.data.analysis);
    } catch (error) {
      console.error('Error analyzing symptoms:', error);
      setResult({
        error: 'Failed to analyze symptoms. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Symptom Checker</h1>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <div className="flex">
          <AlertCircle className="h-6 w-6 text-yellow-400 mr-2" />
          <p className="text-sm text-yellow-700">
            This tool provides general guidance only and should not replace professional medical advice.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="symptoms" className="block text-gray-700 font-medium mb-2">
            Describe your symptoms
          </label>
          <textarea
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="Please describe your symptoms in detail..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Analyzing...' : 'Analyze Symptoms'}
        </button>
      </form>

      {result && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Analysis Result</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-700">Triage Assessment:</h3>
              <p className="text-gray-600">{result.triage}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Possible Conditions:</h3>
              <p className="text-gray-600">{result.diagnosis}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Health Education:</h3>
              <p className="text-gray-600">{result.education}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Recommended Action:</h3>
              <p className="text-gray-600">{result.referral}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;