import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Hello world!")
  const [title, setTitle] = useState("Título padrão");
  // State (Estado)
  return(
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
      <button onClick={() => {
        setTitle('Título alterado');
        setMessage('Mensagem alterada');
      }}
      >
        Mudar mensagem
      </button>
    </div>
  )
}

export default App;