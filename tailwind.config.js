/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        colors: {
            "body-bg": "#20222b",
            "card-bg": "#282a36",
            "body-txt": "#f8f8f2",
        },
        extend: {},
    },
    plugins: [
        require("tailwind-bootstrap-grid")({
            generateContainer: false,
            gridGutterWidth: "2rem",
            gridGutters: {
                1: "0.25rem",
                2: "0.5rem",
                3: "1rem",
                4: "1.5rem",
                5: "3rem",
            },
        }),
    ],
};
