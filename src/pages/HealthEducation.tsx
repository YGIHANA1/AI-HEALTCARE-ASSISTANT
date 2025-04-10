import React from 'react';
import { Book } from 'lucide-react';

const HealthEducation = () => {
  const articles = [
    {
      title: 'Understanding Common Cold vs. Flu',
      description: 'Learn the key differences between cold and flu symptoms and how to treat them.',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Maintaining Heart Health',
      description: 'Essential tips for keeping your heart healthy through diet and exercise.',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Mental Health Awareness',
      description: 'Understanding the importance of mental health and ways to maintain it.',
      image: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <Book className="h-8 w-8 text-blue-500 mr-2" />
        <h1 className="text-3xl font-bold">Health Education Center</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <button className="text-blue-500 hover:text-blue-600 font-medium">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Health Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Prevention Guidelines</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Regular health check-ups</li>
              <li>Vaccination schedules</li>
              <li>Healthy lifestyle habits</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Disease Management</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Chronic condition care</li>
              <li>Medication adherence</li>
              <li>Lifestyle modifications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthEducation;