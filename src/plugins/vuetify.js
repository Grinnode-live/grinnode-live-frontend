import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md',  // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    theme: {
        primary: "#fee715",

    },
    // themes: {
    //     light: {
    //
    //         secondary: "#b0bec5",
    //         accent: "#8c9eff",
    //         error: "#b71c1c",
    //     },
    // },
})