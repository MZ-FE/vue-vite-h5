import { defineConfig, loadEnv } from 'vite';
import { fileURLToPath } from 'url';
import presets from './presets/presets';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  // env 环境变量
  const viteEnv = loadEnv(mode, process.cwd());
  const rootPath = fileURLToPath(new URL('./', import.meta.url));
  const srcPath = `${rootPath}src`;
  return {
    base: viteEnv.VITE_BASE,
    // 插件
    plugins: presets(srcPath),
    // 别名设置
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)), // 把 @ 指向到 src 目录去
      },
    },
    // 服务设置
    server: {
      host: true, // host设置为true才可以使用network的形式，以ip访问项目
      port: 5000, // 端口号
      open: true, // 自动打开浏览器
      cors: true, // 跨域设置允许
      strictPort: true, // 如果端口已占用直接退出
      // 接口代理
      proxy: {
        '/api': {
          // 本地 8000 前端代码的接口 代理到 8888 的服务端口
          target: 'http://localhost:8888/',
          changeOrigin: true, // 允许跨域
          rewrite: (path) => path.replace('/api/', '/'),
        },
      },
    },
    build: {
      // 禁用 gzip 压缩大小报告
      reportCompressedSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,

      assetsDir: 'static/assets',
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
    css: {
      preprocessorOptions: {
        // 全局引入了 scss 的文件
        scss: {
          additionalData: `
          @import "@/assets/styles/variables.scss";
        `,
          javascriptEnabled: true,
        },
      },
    },
    esbuild: {
      // 打包时去除console和debugger
      drop: command === 'build' ? ['console', 'debugger'] : [],
    },
  };
});
