import { useState } from "react";

const faqs = [
  {
    question: "How do I book a trip?",
    answer:
      "You can book a trip by logging in, choosing your destination, filling the booking form, and confirming your booking.",
  },
  {
    question: "Do I need to login to book?",
    answer:
      "Yes, you must login first. Guest users are redirected to the login page before booking.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, you can cancel your booking from the MyBookings page.",
  },
  {
    question: "How can I see my bookings?",
    answer:
      "After logging in, click on the MyBookings button in the navbar.",
  },
  {
    question: "Who can see all bookings?",
    answer:
      "Only admins can see all user bookings through the admin dashboard.",
  },
];

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleFAQ(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-5 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">
                {faq.question}
              </h3>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="mt-3 text-gray-600">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;
