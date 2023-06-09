import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import MiniApp from "../views/MiniApp.vue";
import Todo from "../views/Todo.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/miniapp",
    name: "MiniApp",
    component: MiniApp,
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn && to.name !== "Login") {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
