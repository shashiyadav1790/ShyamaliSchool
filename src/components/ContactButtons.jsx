const ContactButtons = () => {
  const phoneNumber = "+917549073519";
  const whatsappNumber = "917549073519";

  const message = `
Hello Shyamali Global School,

I would like to get complete information regarding admissions, fees structure, and facilities for my child.

Please guide me.
Thank you.
  `;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl
                   flex items-center justify-center
                   hover:scale-110 hover:shadow-2xl
                   transition-all duration-300"
      >
        {/* OFFICIAL WHATSAPP ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
        >
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.82.733 5.458 2.02 7.796L0 32l8.412-2.208A15.936 15.936 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.09c-2.45 0-4.846-.654-6.936-1.892l-.497-.294-4.996 1.31 1.335-4.865-.323-.5A13.02 13.02 0 013.09 16C3.09 8.893 8.893 3.09 16 3.09S28.91 8.893 28.91 16 23.107 29.09 16 29.09zm7.52-9.64c-.41-.205-2.437-1.203-2.815-1.34-.377-.137-.653-.205-.928.205-.274.41-1.065 1.34-1.305 1.614-.24.274-.48.308-.89.103-.41-.205-1.73-.638-3.295-2.035-1.218-1.085-2.04-2.427-2.278-2.837-.24-.41-.025-.63.18-.835.184-.184.41-.48.615-.72.205-.24.274-.41.41-.685.137-.274.069-.514-.034-.72-.103-.205-.928-2.24-1.27-3.066-.333-.8-.67-.69-.928-.703-.24-.012-.514-.015-.788-.015s-.72.103-1.096.514c-.377.41-1.438 1.404-1.438 3.427 0 2.023 1.472 3.98 1.678 4.255.205.274 2.897 4.43 7.02 6.208 4.123 1.778 4.123 1.186 4.866 1.113.743-.072 2.392-.978 2.73-1.922.342-.944.342-1.752.24-1.922-.103-.17-.377-.274-.788-.48z"/>
        </svg>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Us"
        className="w-14 h-14 bg-blue-700 text-white rounded-full shadow-xl
                   flex items-center justify-center
                   hover:bg-blue-800 hover:scale-110
                   transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.27 1.11l-2.2 2.2z"/>
        </svg>
      </a>

    </div>
  );
};

export default ContactButtons;
