import React, { useState } from "react";
import { Link } from "react-router-dom";

// Definição do tipo da propriedade para o Profile
interface ProfileProps {
  user: {
    username: string;
    fullName: string;
    faixa: string;
    avatar: string;
    bio: string;
    backgroundImage: string;
  };
  onLogout: () => void;
  users: {
    username: string;
    fullName: string;
    faixa: string;
    avatar: string;
    bio: string;
    backgroundImage: string;
  }[];
}

const Profile: React.FC<ProfileProps> = ({ user, onLogout, users }) => {
  const [selectedUser, setSelectedUser] = useState<string>("");
  const backgroundImageUrl = user.backgroundImage || `assets/images/background.jpg`;

  // Função para lidar com a mudança do dropdown
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(event.target.value);
  };

  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url('${backgroundImageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100dvh", // Garantir que ocupe toda a altura da tela
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <img src={user.avatar} alt="Avatar" className="mb-5" />
        <div className="flex flex-col items-center justify-center text-center gap-[22px]">
          <p className="text-3xl">Bem-vindo, {user.username}!</p>
          <p className="text-3xl">
            <strong>Nome:</strong> {user.fullName}
          </p>
          <p className="text-3xl">
            <strong>Faixa:</strong> {user.faixa}
          </p>
          <p className="text-xl">
            <strong>Bio:</strong> {user.bio}
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5583988031406&text=Eae,%20quero%20me%20graduar%20:)"
            className="bg-white text-black px-10 py-3 rounded-xl hover:bg-white/90"
          >
            Quero me Graduar!
          </a>
          <button
            onClick={onLogout}
            className="bg-white text-black px-10 py-3 rounded-xl hover:bg-white/90"
          >
            Sair
          </button>
        </div>

        {/* Dropdown para exibição de todos os perfis */}
        <div className="w-full flex flex-col items-center justify-center max-w-xs mt-10 mb-2">
          <h2 className="text-2xl text-center mb-5 text-white">Todos os perfis:</h2>
          <select
            value={selectedUser}
            onChange={handleSelectChange}
            className="bg-white text-black px-4 py-2 rounded-xl mb-2"
          >
            <option value="">Selecione um perfil</option>
            {users.map((profileUser) => (
              <option key={profileUser.username} value={profileUser.username}>
                {profileUser.fullName}
              </option>
            ))}
          </select>

          {/* Link para o perfil selecionado */}
          {selectedUser && (
            <div className="mt-4 mb-2">
              <Link
                to={`/users/${selectedUser}`}
                className="bg-white text-black px-10 py-3 rounded-xl hover:bg-white/90"
              >
                Ver Perfil
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
