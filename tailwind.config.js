/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors : {
            'general' : 'blue',
            'secondary' : 'red',
            'primary' : '#e1637b',
            // 'success' : {DEFAULT : '#e1637b', foreground : 'red'},
            // 'danger' : {DEFAULT : '#EE5B47'},
            // 'cq': {  DEFAULT: '#0065FF',  50: '#B8D4FF',  100: '#A3C8FF',  200: '#7AAFFF',  300: '#5296FF',  400: '#297EFF',  500: '#0065FF',  600: '#004FC7',  700: '#00398F',  800: '#002257',  900: '#000C1F',  950: '#000103'},
        },
        // backgroundImage: {
        //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        //     'gradient-conic':
        //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
