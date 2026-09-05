"use client";

import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can you provide a quote?",
      answer: "We typically provide quotes within 2 hours during business hours. For urgent requests, call us directly at (214) 817-9212 and we can often provide an estimate over the phone immediately."
    },
    {
      question: "Do you offer same-day service?",
      answer: "Yes. Call before 10 AM and we can often schedule same-day service. We're available Monday through Sunday for urgent needs."
    },
    {
      question: "Are your prices competitive?",
      answer: "We offer transparent, competitive pricing with no hidden fees. All quotes are detailed and include everything needed. We provide quotes at no cost and with no obligation."
    },
    {
      question: "Are your team members background-checked?",
      answer: "Yes. Every team member passes a thorough background check before working on any property. We prioritize your safety and security."
    },
    {
      question: "What is your service area?",
      answer: "We serve all of Dallas-Fort Worth, including 15+ cities from our Rowlett headquarters. We have a 60-mile service radius and operate Monday through Sunday."
    },
    {
      question: "Do you offer recurring cleaning services?",
      answer: "Yes. We offer weekly, bi-weekly, and monthly recurring cleaning plans with discounts up to 20%. Recurring customers get priority scheduling with the same team."
    },
    {
      question: "Are you insured?",
      answer: "Yes. We carry 2 million dollars in general liability insurance. Every job is fully insured and protected."
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "We offer a satisfaction guarantee. If you're not happy, we come back and make it right at no additional charge. No questions asked."
    },
    {
      question: "Do you handle commercial and residential work?",
      answer: "Yes. We handle both residential homes and large commercial properties. We have experience with offices, retail spaces, medical facilities, warehouses, restaurants, and more."
    },
    {
      question: "Can you work around my business hours?",
      answer: "Absolutely. We offer before-hours, after-hours, weekend, and holiday service. We'll work around your schedule to minimize disruption."
    },
    {
      question: "Do you provide debris removal and haul-away?",
      answer: "Yes. For demolition, junk removal, and post-construction projects, we handle complete debris removal and disposal. No additional trips needed."
    },
    {
      question: "How do I book a service?",
      answer: "Fill out our free quote form on our website, call us at (214) 817-9212, or text us. We'll confirm details and schedule your service at a convenient time."
    },
    {
      question: "Do you offer move-in or move-out cleaning?",
      answer: "Yes. We specialize in deep cleaning for move-in and move-out situations. Perfect for rentals, home sales, or relocations."
    },
    {
      question: "What about post-construction cleanup?",
      answer: "We handle complete post-construction cleanup including dust control, debris removal, floor cleaning, and final detail work. Typical projects complete in 1-3 days."
    },
    {
      question: "Do you offer junk removal?",
      answer: "Yes. We remove furniture, appliances, construction debris, yard waste, and estate cleanouts. Same-day service available with full haul-away included."
    }
  ];

  return (
    <div>
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-white">
            Have questions? We've got answers. Can't find what you're looking for? Call us at (214) 817-9212.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-container max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-400 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 bg-primary-800 text-white font-semibold flex justify-between items-center hover:bg-primary-700 transition"
                >
                  <span className="text-left">{faq.question}</span>
                  <span className="text-xl text-accent-400">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-primary-50 border-t border-gray-400">
                    <p className="text-white">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary-800 rounded-lg p-8 border border-accent-500 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-white mb-6">
              Our team is here to help. Call us anytime Monday through Sunday.
            </p>
            <a
              href="tel:2148179212"
              className="inline-block bg-accent-500 text-primary-900 font-bold px-8 py-3 rounded-lg hover:bg-accent-400 transition"
            >
              Call (214) 817-9212
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
