import React from 'react';
import { Pill, Heart, Brain, Bone, Eye, Stethoscope } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cardiovascular",
      description: "Comprehensive range of cardiovascular medications for heart health and blood pressure management.",
      products: ["ACE Inhibitors", "Beta Blockers", "Calcium Channel Blockers", "Diuretics"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neurological",
      description: "Advanced neurological treatments for various central nervous system conditions.",
      products: ["Anticonvulsants", "Antidepressants", "Anxiolytics", "Cognitive Enhancers"]
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: "Anti-Infectives",
      description: "High-quality antibiotics and antiviral medications from trusted manufacturers.",
      products: ["Antibiotics", "Antivirals", "Antifungals", "Antimalarials"]
    },
    {
      icon: <Bone className="w-8 h-8" />,
      title: "Musculoskeletal",
      description: "Pain management and musculoskeletal health solutions for improved mobility.",
      products: ["NSAIDs", "Muscle Relaxants", "Corticosteroids", "Joint Health"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Ophthalmology",
      description: "Specialized eye care medications and treatments for various ocular conditions.",
      products: ["Eye Drops", "Glaucoma Treatments", "Anti-Inflammatory", "Lubricants"]
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Respiratory",
      description: "Respiratory health solutions including bronchodilators and anti-inflammatory agents.",
      products: ["Bronchodilators", "Corticosteroids", "Mucolytics", "Antihistamines"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We import and distribute a comprehensive range of finished dosage forms from 
            trusted pharmaceutical manufacturers worldwide, ensuring quality and efficacy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0054a6] to-[#00adee] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
              <div className="space-y-2">
                {category.products.map((product, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-[#00adee] rounded-full mr-3"></div>
                    {product}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Section */}
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Quality Assurance</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                All our products undergo rigorous quality control processes and meet international 
                pharmaceutical standards. We work exclusively with certified manufacturers who 
                maintain GMP compliance and regulatory approvals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">GMP Certified Manufacturing Partners</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">International Regulatory Compliance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Comprehensive Pharmacovigilance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Cold Chain Management</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Quality control laboratory" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;