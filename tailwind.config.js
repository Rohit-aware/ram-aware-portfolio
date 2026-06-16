export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#dbeafe',
          400: '#60a5fa',
          500: '#0A66C2',
          600: '#004182',
          700: '#003166',
        },
        surface: {
          0: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
        },
        ink: {
          900: '#0f172a',
          700: '#334155',
          500: '#64748b',
          300: '#94a3b8',
          100: '#e2e8f0',
        },
        emerald: {
          500: '#10b981',
          light: '#d1fae5',
        },
        amber: { 500: '#f59e0b' },
        violet: { 500: '#8b5cf6' },
        rose: { 500: '#f43f5e' },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(0,0,0,0.04)',
        'sm': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'md': '0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)',
        'lg': '0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.05)',
        'xl': '0 20px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.04)',
        'glow': '0 0 0 3px rgba(10,102,194,0.15)',
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 20px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.06)',
        'nav': '0 1px 0 rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
        'glass': 'inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)',
        'btn': '0 1px 2px rgba(10,102,194,0.2), 0 4px 12px rgba(10,102,194,0.15)',
        'btn-hover': '0 2px 4px rgba(10,102,194,0.25), 0 6px 20px rgba(10,102,194,0.2)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0A66C2 0%, #0ea5e9 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)',
        'gradient-mesh': 'radial-gradient(at 30% 20%, rgba(10,102,194,0.06) 0, transparent 50%), radial-gradient(at 80% 80%, rgba(14,165,233,0.04) 0, transparent 50%)',
        'gradient-ap': 'linear-gradient(135deg, #0A66C2, #0ea5e9)',
        'gradient-sys': 'linear-gradient(135deg, #7c3aed, #a855f7)',
        'gradient-rep': 'linear-gradient(135deg, #059669, #10b981)',
        'gradient-comp': 'linear-gradient(135deg, #dc2626, #f43f5e)',
        'gradient-te': 'linear-gradient(135deg, #d97706, #f59e0b)',
        'gradient-lead': 'linear-gradient(135deg, #0891b2, #06b6d4)',
      },
      borderRadius: {
        'xl2': '1rem',
        'xl3': '1.25rem',
      },
      animation: {
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
