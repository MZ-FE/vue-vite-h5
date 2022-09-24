import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import { VantResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers';
import unocss from 'unocss/vite';
import Markdown from 'vite-plugin-md';
import Prism from 'markdown-it-prism';
import ViteFonts from 'vite-plugin-fonts';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import LinkAttributes from 'markdown-it-link-attributes';
import { resolve } from 'path';

const defaultClasses = 'prose prose-sm m-auto text-left';

export default (srcPath: string) => {
  return [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    AutoImport({
      dts: './src/types/auto-imports.d.ts',
      imports: ['vue', 'pinia', 'vue-router', 'vue-i18n', '@vueuse/core'],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      resolvers: [],
    }),
    Components({
      dts: './src/types/components.d.ts',
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      // imports 指定组件所在位置，默认为 src/components; 有需要也可以加上 view 目录
      dirs: ['src/components/'],
      resolvers: [VantResolver(), IconsResolver({ customCollections: ['custom'] }), VueUseComponentsResolver()],
    }),
    Icons({
      compiler: 'vue3',
      customCollections: {
        custom: FileSystemIconLoader(`${srcPath}/assets/svg`),
      },
      autoInstall: true,
    }),
    ViteFonts({
      google: {
        families: ['Open Sans', 'Montserrat', 'Fira Sans'],
      },
    }),
    VueI18n({
      include: [resolve(__dirname, '../locales/**')],
    }),
    unocss(),
    Markdown({
      wrapperClasses: defaultClasses,
      headEnabled: false,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism);
        // 为 md 中的所有链接设置为 新页面跳转
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        });
      },
    }),
  ];
};
