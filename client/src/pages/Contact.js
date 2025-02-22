import { useRef } from 'react';

export default function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    formRef.current.reset();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              required
              rows="4"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}