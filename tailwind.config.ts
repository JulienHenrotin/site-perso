// tailwind.config.ts
import colors from 'tailwindcss/colors'
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: '#A491D3',   // violet doux
                secondary: '#818aa3', // gris bleuté
                tertiary: '#c5dca0',  // vert pastel
                info: colors.cyan,
                success: colors.emerald,
                warning: colors.orange,
                error: colors.red,
                neutral: colors.gray
            }
        }
    }
}
