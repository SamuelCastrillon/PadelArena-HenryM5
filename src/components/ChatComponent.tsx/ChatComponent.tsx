// ("use client");
// import { useState, useEffect, useContext } from "react";
// import io, { Socket } from "socket.io-client";
// import { AuthContext } from "@/context/GlobalContext";

// // Tipo para el mensaje
// interface Message {
//   from: string;
//   message: string;
// }

// const ChatView: React.FC = () => {
//   const { currentUser } = useContext(AuthContext); // Obtener el usuario actual desde el contexto
//   // Inicializar socket fuera del componente para evitar múltiples conexiones
//   const socket: Socket = io("http://localhost:3001", {
//     query: { userid: currentUser?.id },
//   });

//   const [message, setMessage] = useState<string>("");
//   const [messages, setMessages] = useState<Message[]>([]);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const newMessage: Message = {
//       message,
//       from: "Me",
//     };
//     // setMessages([...messages, newMessage]);
//     socket.emit("message", message);
//   };

//   useEffect(() => {
//     const recieveMessage = (message: Message) => {
//       setMessages((state) => [...state, message]);
//     };

//     socket.on("message", recieveMessage);
//     return () => {
//       socket.off("message", recieveMessage);
//     };
//   }, []);

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" onChange={(e) => setMessage(e.target.value)} />
//         <button>Send</button>
//         <ul>
//           {messages?.map((message, i) => (
//             <li key={i}>
//               {message.from}: {message.message}
//             </li>
//           ))}
//         </ul>
//       </form>
//     </>
//   );
// };

// export default ChatView;
"use client";
import { useState, useEffect, useContext } from "react";
import io, { Socket } from "socket.io-client";
import { AuthContext } from "@/context/GlobalContext";

// Tipo para el mensaje
interface Message {
  from: string;
  message: string;
}

const ChatView: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  const socket: Socket = io("http://localhost:3001", {
    query: { userid: currentUser?.id },
  });

  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage: Message = {
      message,
      from: "Me",
    };
    socket.emit("message", message);
    setMessage(""); // Vacía el input después de enviar el mensaje
  };

  useEffect(() => {
    const recieveMessage = (message: Message) => {
      setMessages((state) => [...state, message]);
    };

    socket.on("message", recieveMessage);
    return () => {
      socket.off("message", recieveMessage);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex h-[500px] max-w-screen-md w-full rounded-glass m-10 shadow-md p-4 bg-glass backdrop-filter backdrop-blur-lg border-glass border-2">
        <div className="flex-1 flex flex-col text-white rounded-t-glass rounded-b-xl bg-black/30">
          <div className="p-4 rounded-t-glass bg-customBlue bg-blur backdrop-filter backdrop-blur text-white flex items-center">
            <img
              src="/avatarJugador.png"
              alt="Avatar"
              className="w-10 h-10 rounded-full object-cover mr-3" // Agregado object-cover para mantener la proporción
            />
            <div>
              <p className="font-bold">CLUB PADEL ARENA</p>
              <p className="text-sm">Chat comunitario</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <ul className="space-y-2">
              {messages?.map((msg, i) => (
                <li key={i} className="p-2 bg-black/30 rounded">
                  <strong>{msg.from}:</strong> {msg.message}
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 p-2 border border-gray-600 rounded-l-xl bg-glass backdrop-filter  backdrop-blur-lg bg-black/20 text-white"
              placeholder="Escribe tu mensaje..."
            />
            <button
              type="submit"
              className="p-2 bg-lime text-xs text-black rounded-r hover:bg-customBlue hover:text-slate radhiumz uppercase">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
