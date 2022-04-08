import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  let baseOption = {
    plugins: [vue()]
  }
  console.log('defineConfig', command, mode)

  if (command === 'serve') {
    return {
      // dev 独有配置
      ...baseOption
    }
  } else {
    // command === 'build'
    return {
      // build 独有配置
      ...baseOption
    }
  }
})
