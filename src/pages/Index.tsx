import { useState } from "react";
import Icon from "@/components/ui/icon";

function RegisterModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<"phone" | "gmail">("phone");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white w-full max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-red-600 transition-colors"
        >
          <Icon name="X" size={24} />
        </button>
        <div className="p-8">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">РЕГИСТРАЦИЯ</h2>
          <p className="text-neutral-500 mb-6 text-sm">
            Для входа в <span className="font-bold text-black">Сок PRO</span> зарегистрируйтесь через номер телефона или Gmail
          </p>

          <div className="flex border-b border-black mb-6">
            <button
              onClick={() => setTab("phone")}
              className={`flex-1 py-2 text-sm uppercase tracking-widest font-bold transition-colors ${tab === "phone" ? "border-b-2 border-red-600 text-red-600" : "text-neutral-400"}`}
            >
              Телефон
            </button>
            <button
              onClick={() => setTab("gmail")}
              className={`flex-1 py-2 text-sm uppercase tracking-widest font-bold transition-colors ${tab === "gmail" ? "border-b-2 border-red-600 text-red-600" : "text-neutral-400"}`}
            >
              Gmail
            </button>
          </div>

          {tab === "phone" ? (
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Номер телефона</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full border-b-2 border-black py-2 px-0 focus:outline-none focus:border-red-600 placeholder-neutral-300 text-lg"
                />
              </div>
              <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-red-600 transition-colors">
                Получить код
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <button className="w-full border-2 border-black py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-3">
                <Icon name="Mail" size={20} />
                Войти через Gmail
              </button>
            </div>
          )}

          <p className="text-xs text-neutral-400 mt-6 text-center">
            Нажимая «Продолжить», вы соглашаетесь с условиями использования Сок PRO
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            СОК PRO
          </a>
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors hidden md:block">
              Возможности
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors hidden md:block">
              О приложении
            </a>
            <button
              onClick={() => setShowRegister(true)}
              className="bg-black text-white px-5 py-2 text-sm uppercase tracking-widest hover:bg-red-600 transition-colors font-bold"
            >
              Войти
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              СОК
              <br />
              <span className="text-red-600">PRO</span>
            </h1>
            <p className="text-xl max-w-xl mb-8">
              ИИ-чат. Друзья. Игры. Знакомства. Всё в одном приложении — живи ярче вместе с Сок PRO.
            </p>
            <button
              onClick={() => setShowRegister(true)}
              className="bg-black text-white px-10 py-5 text-sm uppercase tracking-widest hover:bg-red-600 transition-colors font-bold"
            >
              Начать бесплатно
            </button>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600 flex items-center justify-center">
              <span className="text-white text-9xl font-bold tracking-tighter">С</span>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">ВОЗМОЖНОСТИ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group border border-neutral-700 p-6 hover:border-red-600 transition-colors">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-4">
                <Icon name="Bot" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">ИИ-Чат</h3>
              <p className="text-neutral-400">Умный собеседник на базе ИИ — отвечает, помогает, вдохновляет 24/7</p>
            </div>

            <div className="group border border-neutral-700 p-6 hover:border-red-600 transition-colors">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-4">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Друзья</h3>
              <p className="text-neutral-400">Находи новых друзей, общайся, создавай группы по интересам</p>
            </div>

            <div className="group border border-neutral-700 p-6 hover:border-red-600 transition-colors">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-4">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Игры</h3>
              <p className="text-neutral-400">Играй с друзьями прямо в приложении — без установки и лагов</p>
            </div>

            <div className="group border border-neutral-700 p-6 hover:border-red-600 transition-colors">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-4">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Знакомства</h3>
              <p className="text-neutral-400">Умные знакомства на основе интересов — находи людей близких по духу</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О НАС</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 flex items-center justify-center">
                <span className="text-9xl font-bold text-red-600 tracking-tighter">PRO</span>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Сок PRO — это новое поколение социальных платформ. Мы объединяем ИИ, общение, игры и знакомства в одном месте.
              </p>
              <p className="mb-6">
                Наша платформа создана для тех, кто хочет больше от социальных сетей: умные рекомендации, живое общение, игры с друзьями и знакомства без лишнего шума.
              </p>
              <p className="mb-6">
                Присоединяйся к сообществу Сок PRO — и открой новый уровень онлайн-жизни.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Принципы</h3>
                  <ul className="space-y-2">
                    <li>Живое общение</li>
                    <li>Умный ИИ</li>
                    <li>Безопасность</li>
                    <li>Яркие эмоции</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Разделы</h3>
                  <ul className="space-y-2">
                    <li>ИИ-чат</li>
                    <li>Друзья</li>
                    <li>Игры</li>
                    <li>Знакомства</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ПРИСОЕДИНЯЙСЯ</h2>
              <p className="text-xl mb-8">Регистрируйся через номер телефона или Gmail — это займёт меньше минуты.</p>
              <div className="space-y-4">
                <p className="flex items-center gap-4">
                  <Icon name="Phone" size={20} />
                  <span>Регистрация по номеру телефона</span>
                </p>
                <p className="flex items-center gap-4">
                  <Icon name="Mail" size={20} />
                  <span>Регистрация через Gmail</span>
                </p>
                <p className="flex items-center gap-4">
                  <Icon name="Shield" size={20} />
                  <span>Безопасно и без спама</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <button
                onClick={() => setShowRegister(true)}
                className="w-full bg-white text-black py-5 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors text-lg"
              >
                Зарегистрироваться
              </button>
              <button
                onClick={() => setShowRegister(true)}
                className="w-full border-2 border-white text-white py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-red-600 transition-colors text-lg"
              >
                Уже есть аккаунт? Войти
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-bold tracking-tighter text-lg">СОК PRO</span>
          <span className="text-sm text-neutral-400">© 2026 Сок PRO. Все права защищены.</span>
          <div className="flex gap-6">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">Конфиденциальность</a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">Условия</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
