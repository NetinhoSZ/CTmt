import React from "react";

interface ProfileProps {
  user: {
    username: string;
    fullName: string;
    faixa: string;
    avatar: string;
    bio: string;
  };
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onLogout }) => {
  return (
    <div className="w-full flex items-center justify-center mb-2" style={{ 
      backgroundImage: "url('src/assets/images/background.jpg')",     
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh' }}>

      <div className="">
        <img
          src={user.avatar}
          alt="Avatar"
          className=""
        />
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
          >Quero me Graduar!</a>
          <button
            onClick={onLogout}
            className="bg-white text-black px-10 py-3 rounded-xl hover:bg-white/90"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
