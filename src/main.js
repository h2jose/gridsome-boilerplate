import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { appOptions, head }) {
  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  // })

  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  // });

  const opts = {
    icons: {
      iconfont: "mdiSvg", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    // adjust the theme if you would like to
    theme: {
      themes: {
        light: {
          primary: "#0097DF",
          secondary: "#0057D3",
          accent: "#BDBDBD",
          info: "#00BFA5",
          error: "#FF5252",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
    },
  };
  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify(opts);

  Vue.component('Layout', DefaultLayout)
}
