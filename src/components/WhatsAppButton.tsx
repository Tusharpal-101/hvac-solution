import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "917302531042";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl"
    >
      <MessageCircle size={26} />
    </a>
  );
};

export default WhatsAppButton;