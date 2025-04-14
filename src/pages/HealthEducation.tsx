import React, { useState } from 'react';
import { Book } from 'lucide-react';
import Modal from '../components/Modal';

interface Article {
  title: string;
  description: string;
  image: string;
  fullContent: string;
}

function HealthEducation() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      title: 'Understanding Common Cold vs. Flu',
      description: 'Learn the key differences between cold and flu symptoms and how to treat them.',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=800',
      fullContent: `
        <h3 class="text-xl font-semibold mb-4">Common Cold vs. Flu</h3>
        <p class="mb-4">The common cold and flu are both respiratory illnesses but they are caused by different viruses. Because these two types of illnesses have similar symptoms, it can be difficult to tell the difference between them based on symptoms alone.</p>
        
        <h4 class="text-lg font-semibold mb-2">Key Differences:</h4>
        <ul class="list-disc pl-6 mb-4">
          <li>Flu symptoms are usually more severe than cold symptoms</li>
          <li>Flu symptoms come on suddenly, while cold symptoms develop gradually</li>
          <li>Fever is more common with flu than with colds</li>
        </ul>

        <h4 class="text-lg font-semibold mb-2">Prevention:</h4>
        <ul class="list-disc pl-6 mb-4">
          <li>Wash your hands frequently</li>
          <li>Avoid close contact with sick people</li>
          <li>Get your annual flu vaccine</li>
          <li>Maintain a healthy lifestyle</li>
        </ul>

        <p class="text-sm text-gray-600 mt-4">Source: World Health Organization - <a href="https://www.who.int/health-topics" class="text-blue-500 hover:underline" target="_blank">Health Topics</a></p>
      `
    },
    {
      title: 'Maintaining Heart Health',
      description: 'Essential tips for keeping your heart healthy through diet and exercise.',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
      fullContent: `
        <h3 class="text-xl font-semibold mb-4">Heart Health Essentials</h3>
        <p class="mb-4">Cardiovascular disease remains one of the leading causes of death worldwide. However, many heart conditions are preventable through lifestyle changes and proper medical care.</p>

        <h4 class="text-lg font-semibold mb-2">Key Prevention Strategies:</h4>
        <ul class="list-disc pl-6 mb-4">
          <li>Maintain a healthy diet rich in fruits, vegetables, and whole grains</li>
          <li>Exercise regularly - aim for 150 minutes of moderate activity per week</li>
          <li>Control blood pressure and cholesterol levels</li>
          <li>Quit smoking and limit alcohol consumption</li>
        </ul>

        <h4 class="text-lg font-semibold mb-2">Warning Signs:</h4>
        <ul class="list-disc pl-6 mb-4">
          <li>Chest pain or discomfort</li>
          <li>Shortness of breath</li>
          <li>Pain in arms, back, neck, or jaw</li>
          <li>Feeling lightheaded or dizzy</li>
        </ul>

        <p class="text-sm text-gray-600 mt-4">Source: World Health Organization - <a href="https://www.who.int/health-topics" class="text-blue-500 hover:underline" target="_blank">Health Topics</a></p>
      `
    },
    {
      title: 'Mental Health Awareness',
      description: 'Understanding the importance of mental health and ways to maintain it.',
      image: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&q=80&w=800',
      fullContent: `
        <h3 class="text-xl font-semibold mb-4">Mental Health and Well-being</h3>
        <p class="mb-4">Mental health is a crucial part of overall health and well-being. It affects how we think, feel, act, handle stress, relate to others, and make choices.</p>

        <h4 class="text-lg font-semibold mb-2">Common Mental Health Conditions:</h4>
        <ul class="list-disc pl-6 mb-4">
          <li>Depression</li>
          <li>Anxiety disorders</li>
          <li>Bipolar disorder</li>
          <li>Post-traumatic stress disorder (PTSD)</li>
        </ul>

        <h4 class="text-lg font-semibold mb-2">Maintaining Mental Health:</h4>
        <ul class="list-disc pl-6 mb-4">
          <li>Practice regular physical activity</li>
          <li>Get adequate sleep</li>
          <li>Develop strong social connections</li>
          <li>Seek professional help when needed</li>
        </ul>

        <p class="text-sm text-gray-600 mt-4">Source: World Health Organization - <a href="https://www.who.int/health-topics" class="text-blue-500 hover:underline" target="_blank">Health Topics</a></p>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
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
                <button 
                  onClick={() => setSelectedArticle(article)}
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
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

      <Modal
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        title={selectedArticle?.title || ''}
        content={
          <div dangerouslySetInnerHTML={{ __html: selectedArticle?.fullContent || '' }} />
        }
      />
    </div>
  );
}

export default  HealthEducation;