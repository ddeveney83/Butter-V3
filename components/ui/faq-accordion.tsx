"use client";
import { useId, useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQ } from "@/content/service-details";
function FAQItem({ item }: { item: FAQ }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="faq-item">
      <h3>
        <button
          type="button"
          id={`${id}-question`}
          aria-expanded={open}
          aria-controls={`${id}-answer`}
          onClick={() => setOpen(!open)}
        >
          {item.question}
          {open ? (
            <Minus size={18} aria-hidden="true" />
          ) : (
            <Plus size={18} aria-hidden="true" />
          )}
        </button>
      </h3>
      <div
        id={`${id}-answer`}
        role="region"
        aria-labelledby={`${id}-question`}
        hidden={!open}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
}
export function FAQAccordion({ items }: { items: readonly FAQ[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <FAQItem key={item.question} item={item} />
      ))}
    </div>
  );
}
