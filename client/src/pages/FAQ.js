const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express options available at checkout."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards and PayPal."
    },
    {
      question: "Can I return products?",
      answer: "Yes, we offer 30-day returns for unused products in original packaging."
    }
  ];
  
  export default function FAQ() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }