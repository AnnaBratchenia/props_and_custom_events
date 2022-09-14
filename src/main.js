import { createApp } from "vue";
import App from "./App.vue";
import ActiveUser from "./components/ActiveUser"
import UserData from "./components/UserData"


const app = createApp(App);

app.component("active-user", ActiveUser);
app.component('user-data', UserData)
app.mount("#app");
