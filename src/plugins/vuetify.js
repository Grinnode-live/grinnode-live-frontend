import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg',  // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    theme: {
        options: { customProperties: true }, // Enabled for accessing primary color css variable for span styling
        themes:{
            light:{
                primary:"#82603a",
                secondary:"#fef102",
                accent: "#b73b4f",
                error:"#a05257",
                warning:"#8e575f",
                info:"#17151a"
            }
        }

    },

})