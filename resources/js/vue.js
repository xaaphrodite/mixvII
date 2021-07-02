require("./xbootstrap");
import { InertiaProgress } from "@inertiajs/progress";
import Nprogress from "nprogress";
import { createApp } from "vue";
import router from "../js/vue/routes";
import store from "../js/vue/store";
import App from "../js/vue/App";

/*
|--------------------------------------------------------------------------
| mixvII - clientVue
|--------------------------------------------------------------------------
|
| Author    : rasetiansyah
| Github    : https://github.com/xaaphrodite
| Facebook  : https://www.facebook.com/xaaphrodite
| Instagram : https://www.instagram.com/rasetiansyah_
| Discord   : https://discordapp.com/users/742543110856507482
| LinkedIn  | https://www.linkedin.com/in/rivane-rasetiansyah-b55199212
|
*/

// App entry
createApp(App).use(store).use(router).mount("#vue");

InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 250,

    // The color of the progress bar.
    color: "#80bc01",

    // Whether to include the default NProgress styles.
    includeCSS: true,

    // Whether the NProgress spinner will be shown.
    showSpinner: false,
    // Ease
    easing: "ease",
});

Nprogress.configure({
    showSpinner: false,
});
