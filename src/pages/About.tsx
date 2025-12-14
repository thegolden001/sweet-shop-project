import React from 'react';
import { Users, Award, Globe, Heart, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Preego Digital India</h1>
            <p className="text-xl leading-relaxed">
              We are passionate about bringing you the finest collection of traditional and contemporary 
              clothing, combining timeless elegance with modern style. Our journey began with a simple 
              mission: to make premium fashion accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, Preego Digital India Pvt Ltd started as a small family business 
                  with a big dream. We noticed a gap in the market for high-quality, affordable 
                  clothing that celebrates both Indian traditions and global fashion trends.
                </p>
                <p>
                  What began as selling through established marketplaces like Flipkart, Amazon, and 
                  Meesho has now evolved into our own dedicated platform, allowing us to provide a 
                  more personalized shopping experience for our valued customers.
                </p>
                <p>
                  Today, we serve thousands of satisfied customers across India, offering everything 
                  from elegant sarees and kurtas to contemporary western wear and formal attire.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape the way we serve our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We source only the finest materials and work with skilled artisans to ensure 
                every piece meets our high standards of quality and craftsmanship.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Centric</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We listen, adapt, and 
                continuously improve to exceed expectations and build lasting relationships.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultural Heritage</h3>
              <p className="text-gray-600">
                We celebrate India's rich textile heritage while embracing global fashion trends, 
                creating a perfect blend of traditional and contemporary styles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To democratize fashion by making premium, stylish, and comfortable clothing 
                accessible to everyone, while preserving and promoting India's rich textile heritage 
                through modern retail experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become India's most trusted and beloved fashion brand, known for our commitment 
                to quality, innovation, and customer satisfaction, while setting new standards 
                in the fashion e-commerce industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600">The passionate people behind Preego Digital India</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">Rajesh Kumar</h3>
              <p className="text-gray-600 mb-2">Founder & CEO</p>
              <p className="text-sm text-gray-500">
                20+ years in textile industry, passionate about fashion and technology.
              </p>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">Priya Sharma</h3>
              <p className="text-gray-600 mb-2">Head of Design</p>
              <p className="text-sm text-gray-500">
                Fashion designer with expertise in traditional and contemporary styles.
              </p>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">Amit Patel</h3>
              <p className="text-gray-600 mb-2">Technology Director</p>
              <p className="text-sm text-gray-500">
                Tech enthusiast building seamless digital shopping experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;