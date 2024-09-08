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
"use client"; //AAAA YA CASI
import React, { useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { AuthContext } from "@/context/GlobalContext"; // Asegúrate de que este sea el camino correcto a tu contexto

interface Message {
  sender: string;
  content: string;
}

const ChatView: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  console.log("user:", currentUser);

  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  // Función para traer los últimos mensajes
  const fetchMessages = async () => {
    try {
      const response = await fetch("http://localhost:3001/chat");

      if (!response.ok) {
        throw new Error("Error al traer los mensajes");
      }
      const data: Message[] = await response.json();
      setMessages(data); // Actualizar el estado con los mensajes obtenidos
      console.log("EH", data);
    } catch (error) {
      console.error("Error al obtener los mensajes:", error);
    }
  };

  useEffect(() => {
    fetchMessages(); // Traer mensajes cuando el componente se monta

    if (currentUser?.id) {
      const newSocket: Socket = io("http://localhost:3001/", {
        query: { userid: currentUser.id }, // Enviar el userID en la query
      });

      setSocket(newSocket);

      const handleMessage = (data: { message: string; from: string }) => {
        const newMessage: Message = {
          content: data.message,
          sender: data.from,
        };
        console.log("Mensaje recibido en cliente:", newMessage);
        setMessages((state) => [...state, newMessage]);
      };

      newSocket.on("message", handleMessage);

      return () => {
        newSocket.off("message", handleMessage); // Elimina el manejador del evento
        newSocket.disconnect();
        console.log("Socket desconectado");
      };
    }
  }, [currentUser]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (socket) {
      const newMessage: Message = {
        content: message,
        sender: "Me", // El remitente debería ser una cadena de texto
      };
      socket.emit("message", newMessage.content); // Solo el contenido se envía al servidor
      setMessages((prevMessages) => [...prevMessages, newMessage]); // Agregar el mensaje localmente
      setMessage(""); // Vacía el input después de enviar el mensaje
    }
  };

  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-start px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl md:text-4xl text-[#f8fafc] uppercase radhiumz">
          Bienvenido a nuestro chat
        </h1>
        <h2 className="text-lg md:text-xl text-[#f8fafc] sfRegular">
          ¡Escribe para participar!
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen z-10">
        <div className="flex h-[500px] max-w-screen-md w-full rounded-glass m-10 shadow-md p-4 bg-glass border-glass border-2">
          <div className="flex-1 flex flex-col text-white rounded-t-glass rounded-b-xl bg-black/30">
            <div className="p-4 rounded-t-glass bg-customBlue bg-blur text-white flex items-center">
              <img
                src="/avatarJugador.png"
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <p className="font-bold">CLUB PADEL ARENA</p>
                <p className="text-sm">Chat comunitario</p>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              <ul className="space-y-2">
                {messages.map((msg, i) => (
                  <li key={i} className="p-2 bg-black/30 rounded">
                    <p>
                      {typeof msg.sender === "string" ? msg.sender : "Anónimo"}:{" "}
                      {typeof msg.content === "string"
                        ? msg.content
                        : "No se pudo encontrar el mensaje"}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 p-2 border border-gray-600 rounded-l-xl bg-glass backdrop-filter backdrop-blur-lg bg-black/20 text-white"
                placeholder="Escribe tu mensaje..."
              />
              <button
                type="submit"
                className="p-2 bg-lime text-xs text-black rounded-r hover:bg-customBlue hover:text-slate radhiumz uppercase">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatView;
