import {nextui} from "@nextui-org/react";
/* 
onst sweden = {
    DEFAULT: '#003660',
    light: '#305b7d',
    dark: '#002b4d',
  }
  
  const wosm = {
    DEFAULT: '#622599',
    light: '#7e3da5',
    dark: '#4a1a7f',
  }
  
  const waggs = {
    DEFAULT: '#201e4d',
    light: '#2c2a5f',
    dark: '#16143a',
  }

*/



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        wosm: {
          DEFAULT: '#622599',
          light: '#7e3da5',
          dark: '#4a1a7f',
        },
        sweden: {
          DEFAULT: '#04549c',
          light: '#305b7d',
          lighter: '#467193',
          lightest: '#668caa',
          dark: '#002b4d',
          darker: '#00223f',
          darkest: '#001b33',
        },
        waggs: {
          DEFAULT: '#201e4d',
          light: '#2c2a5f',
          dark: '#16143a',
        },
        ages: {
          DEFAULT: '#41a62a',
          0: '#41a62a',
          1: '#00a8e1',
          2: '#d14800',
          3: '#da005e',
        },

        bronze: {
          DEFAULT: '#cd7f32',
          light: '#d6bfae',
        },
        silver: {
          DEFAULT: '#BBC6CC',
          light: '#f2f2f2',
        },
        gold: {
          DEFAULT: '#ffd700',
          light: '#fff0c4',
        },
        emerald: {
          DEFAULT: '#50c878',
          light: '#c9f7dc',
        },
      },
      button: {
        primary: {
          DEFAULT: '#003660',
          hover: '#305b7d',
          active: '#002b4d',
        },
        secondary: {
          DEFAULT: '#622599',
          hover: '#7e3da5',
          active: '#4a1a7f',
        },
        tertiary: {
          DEFAULT: '#201e4d',
          hover: '#2c2a5f',
          active: '#16143a',
        },
      },
      border: {
        primary: {
          DEFAULT: '#003660',
          hover: '#305b7d',
          active: '#002b4d',
        },
        secondary: {
          DEFAULT: '#622599',
          hover: '#7e3da5',
          active: '#4a1a7f',
        },
        tertiary: {
          DEFAULT: '#201e4d',
          hover: '#2c2a5f',
          active: '#16143a',
        },
      },
      filters: {
        bronze: 'invert(50%) sepia(96%) saturate(330%) hue-rotate(349deg) brightness(89%) contrast(97%)',
        silver: 'invert(85%) sepia(10%) saturate(217%) hue-rotate(157deg) brightness(92%) contrast(90%)',
        gold: 'invert(74%) sepia(76%) saturate(556%) hue-rotate(356deg) brightness(102%) contrast(109%)',
        emerald: 'invert(99%) sepia(74%) saturate(1444%) hue-rotate(62deg) brightness(83%) contrast(85%)'
      },
    },
  },
  darkMode: 'class', // or 'media'
  plugins: [nextui()],
}
