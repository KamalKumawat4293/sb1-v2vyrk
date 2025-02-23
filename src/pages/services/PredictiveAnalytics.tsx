import React from 'react';
import { BarChart, TrendingUp, LineChart, PieChart, ArrowRight } from 'lucide-react';

export default function PredictiveAnalytics() {
  const features = [
    {
      icon: TrendingUp,
      title: "Demand Forecasting",
      description: "AI-powered predictions for optimal inventory management"
    },
    {
      icon: LineChart,
      title: "Performance Tracking",
      description: "Real-time monitoring of key performance metrics"
    },
    {
      icon: PieChart,
      title: "Resource Optimization",
      description: "Smart allocation of delivery resources"
    },
    {
      icon: BarChart,
      title: "Custom Reports",
      description: "Detailed analytics and custom reporting tools"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-gray-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Predictive Analytics</h1>
            <p className="text-xl text-gray-600">
              Data-driven insights for smarter logistics decisions
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Power Your Decisions with Data
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our predictive analytics platform provides real-time insights and 
              forecasting capabilities to optimize your supply chain operations. 
              Make data-driven decisions with confidence.
            </p>
            <button className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 flex items-center">
              Explore Analytics <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-xl blur-xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              alt="Predictive Analytics"
              className="relative rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="material-card p-6 rounded-xl bg-white">
              <div className="p-3 rounded-full bg-teal-50 w-fit mb-4">
                <Icon className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-teal-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Start Making Data-Driven Decisions
              </h3>
              <p className="text-gray-600 mb-6">
                Transform your logistics operations with powerful analytics and 
                predictive insights.
              </p>
              <button className="material-button bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
                Get Started
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Forecast Accuracy</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">30%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">Real-time</div>
                <div className="text-sm text-gray-600">Analytics</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">Custom</div>
                <div className="text-sm text-gray-600">Reports</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}