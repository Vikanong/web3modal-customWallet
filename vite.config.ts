import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr"

const {
    npm_package_name: name
} = process.env;
// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src')
            },
        },
        plugins: [
            react(),
            svgr()
        ],
        css: {
            preprocessorOptions: {
                less: {
                    additionalData: `@import "${path.resolve(__dirname, 'src/assets/style/common.less')}";`,
                    javascriptEnabled: true,
                }
            },
        },
        build: {
            outDir: `${name}` || 'test',
            sourcemap: false,
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true
                },
                output: {
                    comments: true
                }
            }
        },
        server: {
            // open: true,
            cors: true,
            host: '0.0.0.0',
            port: 3000,
            proxy: {
                '/api': {
                    target: '',
                    changeOrigin: true,
                    // rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        }
    }
})
