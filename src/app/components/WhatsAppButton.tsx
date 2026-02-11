import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

interface WhatsAppButtonProps {
  message?: string;
  laptopName?: string;
  floating?: boolean;
}

export function WhatsAppButton({ message, laptopName, floating = false }: WhatsAppButtonProps) {
  const phoneNumber = "255716909094"; // WhatsApp number for Tanzania
  
  const defaultMessage = laptopName
    ? `Hi! I'm interested in the ${laptopName}. Can you provide more details?`
    : "Hi! I'd like to know more about your laptops.";
  
  const whatsappMessage = message || defaultMessage;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  if (floating) {
    return (
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-colors group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Chat with us!
        </motion.span>
      </motion.a>
    );
  }

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl hover:bg-[#20BA5A] transition-all shadow-lg font-semibold"
    >
      <MessageCircle className="w-5 h-5" />
      Order via WhatsApp
    </motion.a>
  );
}
