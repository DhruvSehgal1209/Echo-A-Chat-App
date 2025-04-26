
import React from "react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  const handleAnonymousChat = () => {
    window.location.href = "https://string-chat.vercel.app/";
  };

  const handleOneOnOneChat = () => {
    navigate("/home");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-green-500 p-8">
      {/* Background overlay for glass effect */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 text-center text-white">
        {/* Heading */}
        <h1 className="text-6xl font-extrabold text-shadow-md mb-6">
          Welcome to Echo : A chat App!
        </h1>

        {/* Subtitle */}
        <p className="text-2xl mb-12 opacity-80">
          Choose a chat experience and start connecting with others today!
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-8 justify-center">
          <button
            onClick={handleAnonymousChat}
            className="btn btn-error text-white text-lg px-8 py-2.5 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex justify-center items-center"
          >
            🔒 Anonymous Chat
          </button>

          <button
            onClick={handleOneOnOneChat}
            className="btn btn-success text-white text-lg px-8 py-2.5 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex justify-center items-center"
          >
            👥 Normal Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;

