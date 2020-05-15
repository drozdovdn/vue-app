import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";

//Регистрация роутера как плагина
Vue.use(Router);

/**
 * как результат экспорт по дефолту новый экземпляр класса
 * * */
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/todos",
      component: () => import("./views/Todos")
    }
  ]
});
