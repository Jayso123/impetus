import React from "react";
// import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({
  phoneNumber,
  message = "Hello! I'm interested in your services.",
  className = "",
}) => {
  const handleWhatsAppClick = () => {
    // Format phone number (remove any spaces, dashes, or special characters except +)
    const formattedPhone = phoneNumber.replace(/[^\d+]/g, "");

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14 bg-green-500 hover:bg-green-600 
        text-white rounded-full 
        flex items-center justify-center
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        hover:scale-110 active:scale-95
        ${className}
      `}
      title="Chat with us on WhatsApp"
    >
      {/* <MessageCircle size={24} /> */}
      <FaWhatsapp size={24} />
    </button>
  );
};

export default WhatsAppButton;
