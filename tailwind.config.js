export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#003fb1",
        secondary: "#7127e5",
        background: "#f9f9ff",

        // tambahan penting dari design kamu
        surface: "#f9f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f0f3ff",
        "surface-container": "#e7eefe",
        "surface-container-high": "#e2e8f8",
        "surface-variant": "#dce2f3",

        onBackground: "#151c27",
        onSurface: "#151c27",
        "on-surface-variant": "#434654",

        outline: "#737686",
        "outline-variant": "#c3c5d7",

        error: "#ba1a1a",
      },

      spacing: {
        xs: "4px",
        sm: "12px",
        md: "24px",
        lg: "40px",
        xl: "64px",
        margin: "32px",
        gutter: "24px",
        base: "8px",
      },

      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],

        // alias supaya JSX  tetap jalan
        "headline-xl": ["Lexend", "sans-serif"],
        "headline-lg": ["Lexend", "sans-serif"],
        "headline-md": ["Lexend", "sans-serif"],

        "body-md": ["Manrope", "sans-serif"],
        "body-lg": ["Manrope", "sans-serif"],
        "body-sm": ["Manrope", "sans-serif"],

        "label-md": ["Manrope", "sans-serif"],
        "label-sm": ["Manrope", "sans-serif"],
      },

      fontSize: {
        "headline-xl": [
          "40px",
          { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "headline-lg": [
          "32px",
          { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],

        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],

        "label-md": [
          "14px",
          { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" },
        ],
        "label-sm": [
          "12px",
          { lineHeight: "14px", letterSpacing: "0.05em", fontWeight: "700" },
        ],
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
