import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Matches files in SUBFOLDERS (e.g. components/ui/Button.tsx)
    "./components/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"], // Futuristic Title
        montserrat: ["var(--font-montserrat)", "sans-serif"], // Clean Body text
        bebas: ["var(--font-bebas)"],
        roboto: ["var(--font-roboto)"],
        rowdies: ["var(--font-rowdies)"],
        nunito: ["var(--font-nunito)"],
        display: ["var(--font-bebas)"], 
        body: ["var(--font-roboto)"],
      },
      colors: {
        "impetus-orange": "#FF4500", // Fire
        "impetus-bronze": "#CD7F32", // Industrial
        "impetus-cyan": "#00FFFF",   // Digital
        "impetus-deep": "#0B3D91",   // Space
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;