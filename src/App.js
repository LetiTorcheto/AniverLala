import { useState, useRef } from "react";
import { Music, Gift, PartyPopper, HelpCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

function Button({ onClick, children, className }) {
  return (
    <button onClick={onClick} className={`text-xl px-6 py-3 rounded-full shadow-lg ${className}`}>
      {children}
    </button>
  );
}

function Card({ children, className }) {
  return <div className={`p-8 bg-white shadow-2xl rounded-2xl border border-purple-300 ${className}`}>{children}</div>;
}

function CardContent({ children }) {
  return <div className="flex flex-col items-center text-center">{children}</div>;
}

export default function BirthdayPage() {
  const [step, setStep] = useState(0);
  const audioRef = useRef(null);

  const handleNextStep = () => {
    if (step === 3) {
      audioRef.current.play();
    }
    setStep(step + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-center p-6 sm:p-10">
      <div className="max-w-md w-full">
        {step === 0 && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <h1 className="text-2xl font-bold">🎈 Você está de aniversário hoje?</h1>
            <Button onClick={handleNextStep} className="bg-purple-600 text-white hover:bg-purple-700 mt-4 w-full">
              Então clique aqui! 🎂
            </Button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <h1 className="text-2xl font-bold">🤨 Você tem certeza?</h1>
            <Button onClick={handleNextStep} className="mt-4 bg-purple-600 text-white hover:bg-purple-700 w-full">
              Sim, tenho certeza!
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <h1 className="text-2xl font-bold">Você por algum acaso é a Lala? 🤔</h1>
            <HelpCircle className="w-20 h-20 text-purple-700 mt-4" />
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
              <Button onClick={handleNextStep} className="bg-purple-600 text-white hover:bg-purple-700 w-full">Sim, sou eu!</Button>
              <Button onClick={() => setStep(4)} className="bg-red-600 text-white hover:bg-red-700 w-full">Não 😱</Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <Card className="text-center w-full">
              <CardContent>
                <h1 className="text-4xl font-extrabold text-purple-700">Feliz Aniversário, Lala! 🎉🎂</h1>
                <p className="text-lg text-gray-600 mt-3">Que seu dia seja cheio de amor, alegria e muitas realizações! 💖</p>
                <iframe src="https://assets.pinterest.com/ext/embed.html?id=43839796369257232" height="341" width="345" frameBorder="0" scrolling="no" className="mt-4 w-full"></iframe>
                <div className="flex justify-center space-x-4 mt-5">
                  <PartyPopper className="w-12 h-12 text-yellow-500 animate-pulse" />
                  <Gift className="w-12 h-12 text-red-500 animate-bounce" />
                  <Music className="w-12 h-12 text-purple-500 animate-spin" />
                </div>
                <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/1AEwr0NdNEpdLBOkmpxFEj?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <h1 className="text-3xl font-bold text-red-600">😡 ENTÃO SAIA DAQUI IMEDIATAMENTE!</h1>
            <XCircle className="w-20 h-20 text-red-700 mt-4" />
            <Button onClick={() => setStep(2)} className="mt-6 bg-gray-600 text-white hover:bg-gray-700 w-full">🔙 Voltar</Button>
          </motion.div>
        )}
      </div>

      <style>
        {`
          body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(to right, #ffafcc, #b3a2d1);
            color: #4a4a4a;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }

          h1, h2, p {
            margin: 0;
            padding: 0;
          }

          h1 {
            font-size: 2rem;
            color: #6a1b9a;
            font-weight: bold;
          }

          h2 {
            font-size: 1.5rem;
            color: #9b4d96;
            font-weight: bold;
          }

          p {
            font-size: 1.2rem;
            color: #5d5d5d;
            margin-top: 10px;
          }

          button {
            background-color: #9b4d96;
            color: #fff;
            padding: 12px 24px;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          button:hover {
            background-color: #6a1b9a;
            transform: translateY(-2px);
          }

          button:active {
            transform: translateY(0);
          }

          .card {
            background-color: #fff;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 100%;
            max-width: 350px;
          }

          .card-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .card h1 {
            font-size: 2rem;
            color: #9b4d96;
          }

          .card p {
            margin-top: 10px;
            color: #b2a9d1;
          }

          iframe {
            border-radius: 12px;
            margin-top: 20px;
          }

          .flex {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
          }

          .flex-col {
            flex-direction: column;
          }

          .sm\:flex-row {
            flex-direction: row;
          }

          .animate-pulse {
            animation: pulse 1.5s infinite ease-in-out;
          }

          .animate-bounce {
            animation: bounce 1s infinite;
          }

          .animate-spin {
            animation: spin 2s infinite linear;
          }

          @keyframes pulse {
            0% {
              opacity: 0.8;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0.8;
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @media (max-width: 640px) {
            body {
              padding: 10px;
            }

            .card {
              max-width: 100%;
            }

            .flex {
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
}
