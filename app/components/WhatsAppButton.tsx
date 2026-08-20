import { MessageCircle } from "lucide-react";
import { academy } from "@/data/academy";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${academy.whatsapp}?text=${encodeURIComponent(
        `Hello ${academy.name}, I would like to know more about admissions.`
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-xl shadow-green-600/20 transition hover:scale-105 hover:bg-green-700"
    >
      <MessageCircle size={22} />
    </a>
  );
}