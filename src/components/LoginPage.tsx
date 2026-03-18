export function LoginPage() {
  return (
    <div className="w-screen h-screen relative flex items-center justify-center overflow-hidden bg-[#1b1b1b]">
      
      {/* Formas decorativas no fundo */}
      <div className="absolute w-[500px] h-[500px] bg-[#d4a373] rounded-full blur-3xl opacity-30 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-[#ddb892] rounded-full blur-3xl opacity-20 bottom-[-120px] right-[-80px]"></div>

      {/* Card */}
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl shadow-2xl w-[380px] flex flex-col items-center gap-6">
        
        {/* Avatar */}
        <div className="w-28 h-28 bg-gradient-to-br from-[#ddb892] to-[#b08968] rounded-full shadow-lg border-4 border-white/20"></div>

        {/* Texto */}
        <h1 className="text-white text-2xl font-bold">Bem-vindo</h1>
        <p className="text-white/70 text-sm">Entre na sua conta</p>

        {/* Botão Login */}
        <button className="w-full bg-[#ddb892] text-[#3e2723] rounded-xl font-semibold text-lg py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#e6ccb2]">
          Login
        </button>

        {/* Botão Cadastro */}
        <button className="w-full bg-transparent border border-white/30 text-white rounded-xl font-semibold text-lg py-3 transition-all duration-300 hover:scale-105 hover:bg-white/10">
          Cadastrar
        </button>

      </div>
    </div>
  );
}