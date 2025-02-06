import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "Why are the prices so cheap?",
    answer: "We optimize our process to be efficient, reducing costs for customers.",
  },
  {
    question: "Will I be able to edit the site myself in the future?",
    answer: "Yes, we provide an easy-to-use editor for you to make changes anytime.",
  },
  {
    question: "Will you continue to support the site after it's finished?",
    answer: "Once we've finished your site, we'll keep it running for free, 24/7 for one year. After one year, it's $10/month.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-xl mx-auto p-6 bg-black text-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-700 rounded-lg">
            <button
              className={`w-full flex justify-between items-center p-4 text-lg font-medium ${
                openIndex === index ? "text-purple-400" : "text-white"
              }`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-300">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
