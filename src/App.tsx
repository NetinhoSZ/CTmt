import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProfileView from "./components/ProfileView";
import BandanaBranca from "./assets/images/BandanaBranca.png";
import BandanaVermelha from "./assets/images/BandanaVermelha.png";
import BandanaAmarela from "./assets/images/BandanaAmarela.png";
import BandanaLaranja from "./assets/images/BandanaLaranja.png";
import BandanaVerde from "./assets/images/BandanaVerde.png";
import BandanaAzul from "./assets/images/BandanaAzul.png";
import BandanaRoxa from "./assets/images/BandanaRoxa.png";
import BandanaMarrom from "./assets/images/BandanaMarrom.png";
import BandanaPreta from "./assets/images/BandanaPreta.png";
import Background from "./assets/images/background.jpg";
import BackgroundNeto from "./assets/images/backgroundNeto.jpg";

// Tipo para o usuário
export interface User {
  username: string;
  password: string;
  fullName: string;
  faixa: "Branca" | "Vermelha" | "Amarela" | "Laranja" | "Verde" | "Azul" | "Roxa" | "Marrom" | "Preta";
  avatar: string;
  bio: string;
  backgroundImage: string;
}

// Mapeamento de faixa para avatar
const faixaToAvatarMap: Record<User["faixa"], string> = {
  Branca: BandanaBranca,
  Vermelha: BandanaVermelha,
  Amarela: BandanaAmarela,
  Laranja: BandanaLaranja,
  Verde: BandanaVerde,
  Azul: BandanaAzul,
  Roxa: BandanaRoxa,
  Marrom: BandanaMarrom,
  Preta: BandanaPreta,
};

const App: React.FC = () => {
  const [users] = useState<User[]>([
    {
      username: "Neto",
      password: "netinhos123",
      fullName: "José Neto",
      faixa: "Vermelha",
      avatar: faixaToAvatarMap["Vermelha"],
      bio: "Eu sou o administrador do sistema.",
      backgroundImage: BackgroundNeto,
    },
    {
      username: "Jhon",
      password: "jhon123",
      fullName: "Jhon Victor",
      faixa: "Vermelha",
      avatar: faixaToAvatarMap["Vermelha"],
      bio: "Eu sou um visitante.",
      backgroundImage: Background,
    },
    {
      username: "Eliandro",
      password: "eli123",
      fullName: "Eliandro",
      faixa: "Branca",
      avatar: faixaToAvatarMap["Branca"],
      bio: "Eu sou um visitante.",
      backgroundImage: Background,
    },
    {
      username: "Davi",
      password: "davi123",
      fullName: "Davi Silva",
      faixa: "Branca",
      avatar: faixaToAvatarMap["Branca"],
      bio: "Eu sou um visitante.",
      backgroundImage: Background,
    },
  ]);

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogin = (username: string, password: string) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setCurrentUser(user);
    } else {
      alert("Usuário ou senha inválidos!");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  // Função para buscar usuário por username
  const getUserByUsername = (username: string): User | undefined => {
    return users.find(user => user.username === username);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={currentUser ? <Navigate to="/profile" /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/profile"
          element={
            currentUser ? (
              <Profile user={currentUser} onLogout={handleLogout} users={users} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/users/:username"
          element={
            <ProfileView getUserByUsername={getUserByUsername} onLogout={handleLogout} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
