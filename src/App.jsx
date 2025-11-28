import React, { useState } from 'react';
import { Phone, Mail, MapPin, ChevronRight, Scale, Shield, Users, ArrowRight, Menu, X, CheckCircle } from 'lucide-react';

// --- Global Color Definitions (Новая Палитра) ---
// Primary Dark (Тёмно-зеленый): #0D2F26
// Accent Bronze (Тёплый бронзовый): #A88C5D
// Text Dark Brown (Темный коричневый): #2C2421
// Base Light (Слоновая кость): #F7F5EF

// ВАЖНО: Эти константы оставлены для справки, но их значения теперь статически прописаны в классах Tailwind.
// const PRIMARY_DARK = '#0D2F26';
// const ACCENT_BRONZE = '#A88C5D';
// const TEXT_DARK_BROWN = '#2C2421';
// const BASE_LIGHT = '#F7F5EF'; 

// --- UI Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    // ИСПРАВЛЕНО: Заменены переменные на статические hex-коды
    const baseStyle = `inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 transform rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A88C5D]`;

    const variants = {
        // #0D2F26
        primary: `bg-[#0D2F26] text-white hover:bg-[#081f18] hover:shadow-xl hover:-translate-y-0.5 border border-transparent`,
        // #2C2421, #F7F5EF
        outline: `bg-transparent text-[#2C2421] border-2 border-[#2C2421] hover:bg-[#F7F5EF]/70 hover:shadow-lg`,
        // #A88C5D
        gold: `bg-[#A88C5D] text-white hover:bg-[#8e7a50] hover:shadow-xl hover:-translate-y-0.5 border border-transparent`
    };

    return (
        // ОШИБКА ИСПРАВЛЕНА: Закрывающий тег теперь совпадает с открывающим тегом <button>
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

const SectionTitle = ({ title, subtitle, align = 'center' }) => (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        {subtitle && (
            // ИСПРАВЛЕНО: #A88C5D
            <span className={`block text-[#A88C5D] font-semibold tracking-wider uppercase text-sm mb-2`}>
                {subtitle}
            </span>
        )}
        <h2 className={`text-3xl md:text-4xl font-serif font-bold text-[#2C2421] leading-tight`}>
            {title}
        </h2>
        {/* ИСПРАВЛЕНО: #A88C5D */}
        <div className={`mt-4 h-1 w-20 bg-[#A88C5D] ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
);

// --- Page Components ---

const Navigation = ({ activePage, setPage, toggleMobileMenu, isMobileMenuOpen }) => {
    const navLinks = [
        { name: 'Главная', id: 'home' },
        { name: 'О компании', id: 'about' },
        { name: 'Услуги', id: 'services' },
        { name: 'Контакты', id: 'contact' },
    ];

    return (
        // ИСПРАВЛЕНО: #F7F5EF
        <nav className={`sticky top-0 z-50 bg-[#F7F5EF]/95 backdrop-blur-sm border-b border-slate-300 shadow-md`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => setPage('home')}
                    >
                        {/* ИСПРАВЛЕНО: #A88C5D, #2C2421 */}
                        <Scale className={`h-8 w-8 text-[#A88C5D] mr-2`} />
                        <div className="flex flex-col">
                            <span className={`text-xl font-serif font-bold text-[#2C2421] tracking-tight`}>
                                ПАРАГРАФЪ
                            </span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => setPage(link.id)}
                                className={`text-sm font-medium transition-colors ${activePage === link.id
                                        ? `text-[#A88C5D]` // ИСПРАВЛЕНО: #A88C5D
                                        : `text-[#2C2421] hover:text-[#A88C5D]` // ИСПРАВЛЕНО: #2C2421, #A88C5D
                                    }`}
                            >
                                {link.name}
                            </button>
                        ))}
                        <Button variant="gold" onClick={() => setPage('contact')}>
                            Записаться
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        {/* ИСПРАВЛЕНО: #2C2421, #A88C5D */}
                        <button onClick={toggleMobileMenu} className={`text-[#2C2421] hover:text-[#A88C5D]`}>
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                // ИСПРАВЛЕНО: #F7F5EF
                <div className={`md:hidden bg-[#F7F5EF] border-b border-slate-300 absolute w-full shadow-lg`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => {
                                    setPage(link.id);
                                    toggleMobileMenu();
                                }}
                                // ИСПРАВЛЕНО: #2C2421, #A88C5D
                                className={`block w-full text-left px-3 py-4 text-base font-medium text-[#2C2421] hover:bg-slate-100 hover:text-[#A88C5D]`}
                            >
                                {link.name}
                            </button>
                        ))}
                        <div className="p-3">
                            <Button variant="gold" className="w-full" onClick={() => {
                                setPage('contact');
                                toggleMobileMenu();
                            }}>
                                Записаться
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

const Footer = ({ setPage }) => (
    // ИСПРАВЛЕНО: #0D2F26
    <footer className={`bg-[#0D2F26] text-slate-300 pt-16 pb-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Brand */}
                <div>
                    <div className="flex items-center mb-6">
                        {/* ИСПРАВЛЕНО: #A88C5D */}
                        <Scale className={`h-8 w-8 text-[#A88C5D] mr-2`} />
                        <span className="text-xl font-serif font-bold text-white">Параграфъ</span>
                    </div>
                    <p className="text-sm leading-relaxed mb-6 text-slate-400">
                        Мы предоставляем профессиональную юридическую защиту для бизнеса и частных лиц с 2004 года.
                        Ваше доверие — наш главный актив.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-serif font-bold text-lg mb-6">Навигация</h3>
                    <ul className="space-y-3">
                        {['Главная', 'О компании', 'Услуги', 'Блог', 'Контакты'].map((item) => (
                            <li key={item}>
                                <button
                                    onClick={() => setPage(item === 'Главная' ? 'home' : 'services')}
                                    // ИСПРАВЛЕНО: #A88C5D
                                    className={`text-sm hover:text-[#A88C5D] transition-colors`}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-serif font-bold text-lg mb-6">Практики</h3>
                    <ul className="space-y-3">
                        {['Арбитражные споры', 'Банкротство', 'Корпоративное право', 'Семейное право', 'Недвижимость', 'Объединение IT компаний '].map((item) => (
                            <li key={item} className="text-sm text-slate-400">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contacts */}
                <div>
                    <h3 className="text-white font-serif font-bold text-lg mb-6">Контакты</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            {/* ИСПРАВЛЕНО: #A88C5D */}
                            <MapPin className={`h-5 w-5 text-[#A88C5D] mr-3 mt-0.5`} />
                            <span className="text-sm"> ДНР, г. Новоазовск,ул. Ленина, д.7, Башня "У моря"</span>
                        </li>
                        <li className="flex items-center">
                            {/* ИСПРАВЛЕНО: #A88C5D */}
                            <Phone className={`h-5 w-5 text-[#A88C5D] mr-3`} />
                            <span className="text-sm">+7 (949) 123-45-67</span>
                        </li>
                        <li className="flex items-center">
                            {/* ИСПРАВЛЕНО: #A88C5D */}
                            <Mail className={`h-5 w-5 text-[#A88C5D] mr-3`} />
                            <span className="text-sm">info@lawfirm-novoaz.ru</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500`}>
                <p>&copy; 2025 Юридическое бюро "Параграфъ". Все права защищены.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Политика конфиденциальности</a>
                    <a href="#" className="hover:text-white">Пользовательское соглашение</a>
                </div>
            </div>
        </div>
    </footer>
);

// --- Sections ---

const HeroSection = ({ setPage }) => (
    // ИСПРАВЛЕНО: #0D2F26
    <section className={`relative bg-[#0D2F26] py-20 lg:py-32 overflow-hidden`}>
        {/* Background Abstract Overlay */}
        {/* Фон с изображением и тёмно-зеленым градиентом */}
        <div className="absolute inset-0 bg-[url('https://avatars.mds.yandex.net/i?id=df8e81a9ceaecedb408f05b190ffe1c0_l-9173887-images-thumbs&n=13')] bg-cover bg-center opacity-10"></div>
        {/* ИСПРАВЛЕНО: #0D2F26 */}
        <div className={`absolute inset-0 bg-gradient-to-r from-[#0D2F26] via-[#0D2F26]/90 to-[#0D2F26]/40`}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
                    Защита ваших интересов — <br />
                    {/* ИСПРАВЛЕНО: #A88C5D */}
                    <span className={`text-[#A88C5D]`}>наша профессия</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                    Комплексная юридическая поддержка бизнеса и частных лиц.
                    Более 21 года успешной практики и выигранных дел.
                    Мы гарантируем конфиденциальность и результат.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="gold" className="text-base px-8 py-4" onClick={() => setPage('contact')}>
                        Получить консультацию
                    </Button>
                    <Button
                        variant="outline"
                        // ИСПРАВЛЕНО: #2C2421
                        className={`text-white border-white hover:bg-white hover:text-[#2C2421] text-base px-8 py-4`}
                        onClick={() => setPage('services')}
                    >
                        Наши услуги
                    </Button>
                </div>
            </div>
        </div>
    </section>
);

const FeaturesSection = () => {
    const features = [
        { icon: Shield, title: "Гарантия защиты", desc: "Мы используем все законные методы для достижения ваших целей." },
        { icon: Users, title: "Команда экспертов", desc: "Адвокаты со стажем более 10 лет и узкой специализацией." },
        { icon: CheckCircle, title: "Прозрачность", desc: "Фиксированные цены и понятная отчетность на каждом этапе." },
    ];

    return (
        // ИСПРАВЛЕНО: #F7F5EF
        <section className={`py-20 bg-[#F7F5EF]`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, idx) => (
                        <div key={idx} className={`group p-8 border border-slate-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white`}>
                            <div className={`h-14 w-14 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#A88C5D]/10 transition-colors`}>
                                {/* ИСПРАВЛЕНО: #2C2421, #A88C5D */}
                                <feature.icon className={`h-7 w-7 text-[#2C2421] group-hover:text-[#A88C5D]`} />
                            </div>
                            {/* ИСПРАВЛЕНО: #2C2421 */}
                            <h3 className={`text-xl font-serif font-bold text-[#2C2421] mb-3`}>{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServicesSection = () => {
    const services = [
        { title: "Корпоративное право", desc: "Регистрация, реорганизация, сопровождение сделок M&A.", items: ["Слияния и поглощения", "Антимонопольные споры", "Due Diligence"] },
        { title: "Арбитражные споры", desc: "Представительство интересов в судах всех инстанций.", items: ["Взыскание долгов", "Налоговые споры", "Банкротство"] },
        { title: "Недвижимость", desc: "Юридическое сопровождение сделок с недвижимостью.", items: ["Проверка чистоты сделки", "Земельные споры", "Сопровождение строительства"] },
        { title: "Защита интеллектуальной собственности.", desc: " Услуги защиты интелектуальной собственности: автосткое право, патенты.", items: ["Регистрация товарных знаков", "АЗащита авторский прав", "Защита патентных прав"] },
        { title: "Налоговое консультирование.", desc: " Помощь в решении проблем с налогооблажением.", items: ["Планирование", "Оптимизация текущей деятельсности", "Участие в налоговых спорах"] },
        { title: "Аккредитаци как IT компании.", desc: " Полное собровождение и консультирование.", items: ["Корректировка соответсвия компании", "Подача заявлений через портал 'Госуслуги'", "Получение выписок, справок и т.д."] }
    ];

    return (
        // ИСПРАВЛЕНО: #F7F5EF
        <section className={`py-20 bg-[#F7F5EF]`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Практики и услуги" subtitle="Чем мы можем помочь" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white p-8 shadow-md hover:shadow-xl transition-shadow border border-slate-100 rounded-lg">
                            {/* ИСПРАВЛЕНО: #2C2421 */}
                            <h3 className={`text-2xl font-serif font-bold text-[#2C2421] mb-4`}>{service.title}</h3>
                            <p className="text-slate-600 mb-6">{service.desc}</p>
                            <ul className="space-y-3 mb-8">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-center text-sm text-slate-700">
                                        {/* ИСПРАВЛЕНО: #A88C5D */}
                                        <ArrowRight className={`h-4 w-4 text-[#A88C5D] mr-2`} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            {/* ИСПРАВЛЕНО: #A88C5D */}
                            <a href="#" className={`inline-flex items-center text-[#A88C5D] font-medium hover:text-[#8e7a50] transition-colors`}>
                                Подробнее <ChevronRight className="h-4 w-4 ml-1" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        // Simulation of API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', phone: '', email: '', message: '' });
        }, 1500);
    };

    return (
        // ИСПРАВЛЕНО: #A88C5D
        <div className={`bg-white rounded-xl shadow-lg p-8 md:p-12 border-t-4 border-[#A88C5D]`}>
            {/* ИСПРАВЛЕНО: #2C2421 */}
            <h3 className={`text-2xl font-serif font-bold text-[#2C2421] mb-6`}>
                Записаться на консультацию
            </h3>
            {status === 'success' ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-lg text-center">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-600" />
                    <h4 className="font-bold text-lg">Заявка отправлена!</h4>
                    <p className="mt-2">Мы свяжемся с вами в течение 15 минут.</p>
                    <button onClick={() => setStatus('idle')} className="mt-4 text-sm underline">Отправить еще</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Ваше имя</label>
                        <input
                            required
                            type="text"
                            // ИСПРАВЛЕНО: #A88C5D
                            className={`w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#A88C5D] focus:border-transparent outline-none transition-all`}
                            placeholder="Иван Иванов"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Телефон</label>
                            <input
                                required
                                type="tel"
                                // ИСПРАВЛЕНО: #A88C5D
                                className={`w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#A88C5D] focus:border-transparent outline-none transition-all`}
                                placeholder="+7 (___) ___-__-__"
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email (необязательно)</label>
                            <input
                                type="email"
                                // ИСПРАВЛЕНО: #A88C5D
                                className={`w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#A88C5D] focus:border-transparent outline-none transition-all`}
                                placeholder="ivan@mail.ru"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Краткое описание проблемы</label>
                        <textarea
                            rows={4}
                            // ИСПРАВЛЕНО: #A88C5D
                            className={`w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#A88C5D] focus:border-transparent outline-none transition-all`}
                            placeholder="Опишите ваш вопрос..."
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>
                    <Button
                        variant="primary"
                        className="w-full py-4 text-lg"
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Отправка...' : 'Отправить заявку'}
                    </Button>
                    <p className="text-xs text-slate-400 text-center mt-4">
                        Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
                    </p>
                </form>
            )}
        </div>
    );
};

const ContactSection = () => (
    // ИСПРАВЛЕНО: #F7F5EF
    <section className={`py-20 bg-[#F7F5EF]`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <SectionTitle
                        align="left"
                        title="Готовы обсудить вашу ситуацию?"
                        subtitle="Свяжитесь с нами"
                    />
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Первичная консультация позволяет оценить перспективы дела и выработать стратегию защиты.
                        Заполните форму, и профильный юрист перезвонит вам.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                                {/* ИСПРАВЛЕНО: #A88C5D */}
                                <Phone className={`h-6 w-6 text-[#A88C5D]`} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Срочная связь 24/7</p>
                                {/* ИСПРАВЛЕНО: #2C2421 */}
                                <p className={`text-xl font-bold text-[#2C2421]`}>+7 (949) 123-45-67</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                                {/* ИСПРАВЛЕНО: #A88C5D */}
                                <MapPin className={`h-6 w-6 text-[#A88C5D]`} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Наш офис</p>
                                {/* ИСПРАВЛЕНО: #2C2421 */}
                                <p className={`text-lg font-medium text-[#2C2421]`}>
                                    ДНР, г. Новоазовск, ул. Ленина, д. 7 <br />
                                    Башня "У моря", офис 45
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <ContactForm />
            </div>
        </div>
    </section>
);

// --- Main App Component ---

export default function LegalFirmApp() {
    const [page, setPage] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // Общий стиль, задающий шрифт и цвет текста для всего приложения
    return (
        // ИСПРАВЛЕНО: #F7F5EF, #2C2421
        <div className={`min-h-screen bg-[#F7F5EF] font-sans text-[#2C2421] selection:bg-amber-100 selection:text-amber-900`}>
            <Navigation
                activePage={page}
                setPage={setPage}
                toggleMobileMenu={toggleMobileMenu}
                isMobileMenuOpen={isMobileMenuOpen}
            />

            <main>
                {page === 'home' && (
                    <>
                        <HeroSection setPage={setPage} />
                        <FeaturesSection />
                        <ServicesSection />
                        <ContactSection />
                    </>
                )}

                {/* Обновленный раздел "О компании" с содержательным текстом */}
                {page === 'about' && (
                    // ИСПРАВЛЕНО: #F7F5EF
                    <section className={`py-20 bg-[#F7F5EF]`}>
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <SectionTitle
                                align="center"
                                title="Ваш надежный партнер в мире права"
                                subtitle="О компании 'ПАРАГРАФЪ'"
                            />

                            <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Юридическое бюро «Параграфъ» было основано в 2004 году с одной миссией: предоставлять исключительную юридическую защиту и стратегическое сопровождение в самых сложных делах. Мы сочетаем глубокое знание российского и международного права с практическим опытом, чтобы обеспечить нашим клиентам максимальный результат.
                                </p>

                                {/* ИСПРАВЛЕНО: #2C2421 */}
                                <h3 className={`text-2xl font-serif font-bold text-[#2C2421] mt-8 mb-4`}>
                                    Наши принципы
                                </h3>

                                <ul className="space-y-4 text-slate-700 list-none pl-0">
                                    <li className="flex items-start">
                                        {/* ИСПРАВЛЕНО: #A88C5D */}
                                        <CheckCircle className={`h-6 w-6 text-[#A88C5D] mr-3 mt-1 flex-shrink-0`} />
                                        <div>
                                            {/* ИСПРАВЛЕНО: #2C2421 */}
                                            <strong className={`text-[#2C2421]`}>Фокус на результат.</strong> Мы не беремся за дела без реальной перспективы. Наша цель — не процесс, а победа.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        {/* ИСПРАВЛЕНО: #A88C5D */}
                                        <CheckCircle className={`h-6 w-6 text-[#A88C5D] mr-3 mt-1 flex-shrink-0`} />
                                        <div>
                                            {/* ИСПРАВЛЕНО: #2C2421 */}
                                            <strong className={`text-[#2C2421]`}>Прозрачность и этика.</strong> Клиенты всегда знают о ходе дела, рисках и стоимости. Мы действуем исключительно в рамках закона и высоких профессиональных стандартов.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        {/* ИСПРАВЛЕНО: #A88C5D */}
                                        <CheckCircle className={`h-6 w-6 text-[#A88C5D] mr-3 mt-1 flex-shrink-0`} />
                                        <div>
                                            {/* ИСПРАВЛЕНО: #2C2421 */}
                                            <strong className={`text-[#2C2421]`}>Узкая специализация.</strong> Наша команда состоит из адвокатов, которые являются признанными экспертами в своих областях: арбитраж, банкротство, корпоративное и земельное право.
                                        </div>
                                    </li>
                                </ul>

                                <div className={`mt-12 p-8 bg-white border border-slate-200 rounded-lg text-center shadow-lg`}>
                                    {/* ИСПРАВЛЕНО: #A88C5D */}
                                    <Users className={`h-12 w-12 mx-auto text-[#A88C5D] mb-3`} />
                                    {/* ИСПРАВЛЕНО: #2C2421 */}
                                    <p className={`font-serif text-xl font-semibold text-[#2C2421]`}>
                                        20+ лет успешной практики | 200+ выигранных дел
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>
                )}

                {page === 'services' && (
                    // ИСПРАВЛЕНО: #F7F5EF
                    <div className={`py-20 bg-[#F7F5EF]`}>
                        <ServicesSection />
                        <div className="text-center mt-12">
                            <p className="text-slate-500">Полный список услуг будет доступен здесь.</p>
                        </div>
                    </div>
                )}

                {page === 'contact' && (
                    <div className="pt-10">
                        <ContactSection />
                        {/* Map Placeholder */}
                        <div className="h-96 w-full bg-slate-200 flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/37.5385,55.7490,14,0/1200x600?access_token=YOUR_TOKEN')] bg-cover bg-center opacity-50 grayscale"></div>
                            <span className="relative bg-white px-6 py-3 rounded-lg shadow-md font-medium text-slate-600">
                                Интерактивная карта (Google/Yandex Maps)
                            </span>
                        </div>
                    </div>
                )}
            </main>
            
            <Footer setPage={setPage} />
        </div>
    );
}