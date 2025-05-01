"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

type FAQItem = {
  id: string
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    id: "01",
    question: "Why should I choose Humestic?",
    answer:
      "Bottleneck mice my capacity is full, nor indentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
  },
  {
    id: "02",
    question: "I like your works, how do we start a project?",
    answer:
      "To start a project with us, simply reach out through our contact form or email. We'll schedule an initial consultation to discuss your needs, goals, and timeline. After understanding your requirements, we'll provide a detailed proposal outlining our approach, deliverables, and pricing structure.",
  },
  {
    id: "03",
    question: "What info is required to get a quotation?",
    answer:
      "To provide an accurate quotation, we need details about your project scope, timeline, specific requirements, and budget expectations. The more information you can share about your goals and vision, the more precise our quotation will be. We may also request additional information depending on the complexity of your project.",
  },
]



export function FAQAThink() {
  const [openItem, setOpenItem] = useState<string>("01")


  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? "" : id)
  }

  

  return (
    <div className="container mx-auto px-4 py-16">
      <div style={{ fontFamily: "var(--font-questrial)" }} className="md:flex w-10/12 justify-between">
        <div className="min-w-[200px]">
          <h2  className="text-sm text-[#001C4A] font-normal mb-2">Frequently asked <br></br> questions</h2>
        </div>
        <div>
          <h3 className="lg:text-[60px] md:text-[30px] font-medium mb-12 text-center">
            {
                `Constant collaboration is how we roll. Let's see if we are a good fit.`
            }
          </h3>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-200">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b border-gray-200">
            <div className="flex justify-between items-center py-6 cursor-pointer" onClick={() => toggleItem(faq.id)}>
              <div className="flex items-center gap-8">
                <span className="text-amber-700 font-medium">{faq.id}</span>
                <h3 style={{ fontFamily: "var(--font-questrial)" }} className="xl:text-[40px] lg:text-[30px] md:text-[20px] font-medium">{faq.question}</h3>
              </div>
              <button
                className="flex items-center justify-center w-8 h-8 rounded-full"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                {openItem === faq.id ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </button>
            </div>
            <div
              id={`faq-answer-${faq.id}`}
              className={cn("pb-6 text-gray-600", openItem === faq.id ? "block" : "hidden")}
            >
              <p style={{ fontFamily: "var(--font-inter)" }} className="text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  )
}
