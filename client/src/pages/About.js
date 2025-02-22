export default function About() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">About Us</h1>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2023, we're passionate about bringing you high-quality products 
              with exceptional customer service. Our team works tirelessly to curate 
              the best selection of items for your lifestyle.
            </p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Quality Assurance</li>
              <li>Customer First Approach</li>
              <li>Sustainable Practices</li>
              <li>Innovative Solutions</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }