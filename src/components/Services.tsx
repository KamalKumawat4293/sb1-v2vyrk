import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Clock, Store, Building, BarChart, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: "Smart Supply Chain",
    description: "AI-powered logistics optimization and predictive analytics",
    path: "/services/smart-supply-chain"
  },
  {
    icon: Clock,
    title: "Multi-Speed Delivery",
    description: "10-min, 4-hour, and same-day delivery options",
    path: "/services/multi-speed-delivery"
  },
  {
    icon: Store,
    title: "Micro-Fulfillment",
    description: "AI-driven dark stores for instant inventory management",
    path: "/services/micro-fulfillment"
  },
  {
    icon: Building,
    title: "Enterprise Solutions",
    description: "End-to-end supply chain transformation",
    path: "/services/enterprise-solutions"
  },
  {
    icon: BarChart,
    title: "Predictive Analytics",
    description: "Real-time insights and demand forecasting",
    path: "/services/predictive-analytics"
  },
  {
    icon: ShieldCheck,
    title: "Secure Operations",
    description: "Blockchain-secured supply chain tracking",
    path: "/services/secure-operations"
  }
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Intelligent Supply Chain</h2>
          <p className="mt-4 text-xl text-gray-600">
            Next-generation logistics powered by artificial intelligence
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.title} className="group">
                <div 
                  onClick={() => navigate(service.path)}
                  className="material-card h-full p-8 rounded-xl bg-white hover:bg-teal-50 transition-colors cursor-pointer"
                >
                  <div className="p-3 rounded-full bg-teal-50 w-fit group-hover:bg-teal-100 transition-colors">
                    <IconComponent className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                  <div className="mt-4 flex items-center text-teal-600 font-medium">
                    Learn more
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}