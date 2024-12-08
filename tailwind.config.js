/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1312px',
    },
    container: {
      center: true, 
      padding: {
        DEFAULT: '1.75rem',    
        sm: '2rem',           
        md: '2.5rem',          
        lg: '2.75rem',             
        xl: '1.5rem',      
      }
    },
    extend: {
      keyframes: {
        scaleUp: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        scaleUp: 'scaleUp 3s ease-in-out infinite',  
      },
      boxShadow: {
        'one': '1.97px 1.97px 4.92px 0px #43444540',   
        'two': '0px 4px 10px 0px #00000040',   
        'three': '0px 0px 10px 0px #00000040',   
        'four': '0px 4px 20px 0px #00000040',   
      }, 
      fontFamily: { 
        'tiro': ['Tiro Bangla', 'sans-serif'],     
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],      
      },
      backgroundImage: {
        'analysis': "url('./analysis-bg.svg')",
        'analysis-desk': "url('./analysis-xl-bg.svg')", 
        'analysis-desk-dark': "url('./analysis-dark.svg')", 
        'customization': "url('./bg-img.svg')", 
        'customization-desk': "url('./bg-xl-img.svg')", 
        'customization-desk-dark': "url('./bg-xl-dark-img.svg')", 
        'small-task': "url('./small-task-bg.svg')", 
        'small-task-desk': "url('./small-task-xl-bg.svg')", 
        'small-task-desk-dark': "url('./small-task-xl-dark-bg.svg')", 
      },
      backgroundColor: {
        'main': '#FEF9F5', 
        'deep': '#26404C', 
      },
      borderColor: {
        'first' : '#FF9040', 
      },
      colors: {
        'orange': '#FF9040',
        'sonali': '#F8AE4B',
        'deep': '#26404C',
      },
    },
  },
  plugins: [],
}

