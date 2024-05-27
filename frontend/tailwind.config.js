/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
       
        extend: {
            backgroundImage: {
                'custom-gradient': 'linear-gradient(to bottom, #00A8E1, #572AD8)',
                'login-gradient': 'linear-gradient(to bottom, #FFF9C5, #CFF6FF)',
              },
              screens: {
                'md-lg': '896px', // Custom breakpoint between md (768px) and lg (1024px)
              },
        },

    },
    plugins: [],
};