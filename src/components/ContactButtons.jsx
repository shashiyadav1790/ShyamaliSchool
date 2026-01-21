const ContactButtons = () => {
  const phoneNumber = "+919876543210";
  const whatsappNumber = "919876543210";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition"
        aria-label="Chat on WhatsApp"
      >
        {/* Clean WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.818.733 5.455 2.016 7.792L0 32l8.398-2.024C10.545 31.267 13.182 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.455c-2.545 0-4.992-.733-7.134-2.108l-.509-.303-4.978 1.194 1.25-4.846-.327-.511C2.184 19.068 1.455 17.11 1.455 14.545 1.455 7.5 7.5 1.455 16 1.455c8.5 0 14.545 6.045 14.545 14.545S24.5 29.455 16 29.455zm7.636-11.727c-.119-.178-.427-.286-.897-.5-.465-.214-2.734-1.354-3.157-1.508-.423-.154-.731-.214-1.035.214-.303.427-1.173 1.508-1.438 1.82-.264.313-.529.356-.995.119-.465-.237-1.957-.719-3.729-2.293-1.379-1.232-2.31-2.754-2.585-3.181-.274-.427-.029-.658.202-.87.207-.193.465-.503.698-.755.234-.252.31-.427.465-.711.155-.284.078-.532-.039-.755-.119-.224-1.035-2.493-1.417-3.408-.373-.892-.754-.771-1.035-.785-.267-.014-.57-.017-.87-.017s-.755.103-1.154.486c-.4.383-1.525 1.489-1.525 3.631 0 2.142 1.562 4.207 1.779 4.496.218.287 3.075 4.698 7.457 6.592 4.383 1.896 4.383 1.264 5.169 1.185.786-.08 2.552-1.041 2.914-2.045.361-1.005.361-1.867.252-2.048z" />
        </svg>
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="w-14 h-14 bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-800 transition"
        aria-label="Call us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.27 1.11l-2.2 2.2z" />
        </svg>
      </a>

    </div>
  );
};

export default ContactButtons;
