// tailwind.config.js
// export const content = ['./**/*.html', './**/*.js']
export default {
    content: ['./**/*.html', './**/*.js'],
    theme: {
        extend: {
            keyframes: {
                fadeUp: {
                    '0%': { opacity: 0, transform: 'translateY(1000px)' },
                    '50%': { opacity: 0.5, transform: 'translateY(500px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' }
                }
            },
            animation: {
                'fade-up': 'fadeUp 1s ease-in-out'
            },
            colors: {
                custom: '#243c5a'
            }
        }
    },
    plugins: []
}
