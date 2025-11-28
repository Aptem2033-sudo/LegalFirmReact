/** @type {import('tailwindcss').Config} */
export default {
    content: [
        // Указываем пути к вашим HTML, JavaScript и JSX файлам
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Добавляем пользовательские цвета для Tailwind, чтобы он знал о них заранее
            colors: {
                'primary-dark': '#0D2F26',
                'accent-bronze': '#A88C5D',
                'text-dark-brown': '#2C2421',
                'base-light': '#F7F5EF',
            }
        },
    },
    plugins: [],
    // Этот фикс необходим для того, чтобы Tailwind мог правильно обрабатывать цвета в динамических классах React
    // Например, bg-[${PRIMARY_DARK}]
    safelist: [
        { pattern: /bg-\[(.+)\]/ },
        { pattern: /text-\[(.+)\]/ },
        { pattern: /border-\[(.+)\]/ },
    ]
}