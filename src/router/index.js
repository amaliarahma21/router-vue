import { createWebHistory, createRouter } from "vue-router";
// Import Component2 Kalian

import Home from "/src/views/Home.vue"; 
import About from "/src/views/About.vue";
import Contact from "/src/views/Contact.vue";
import Produk from "/src/views/Produk.vue";
import Kategori from "/src/views/Kategori.vue";
import Detail from "/src/views/Detail.vue";
import KategoriProduk from "/src/views/KategoriProduk.vue";
import NotFound from "/src/views/NotFound.vue";
import Login from "/src/views/Login.vue";

 
import { users } from '/src/assets/user';

const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
    beforeEnter: (to, from, next) => {
      const loggedInUser = true;
      if (loggedInUser) {
        next(); // Lanjutkan navigasi ke halaman produk jika sudah login
      } else {
        next("/login"); // Alihkan ke halaman login jika belum login
      }
    },
  },
  {
    path: "/detail/:id_produk",
    name: "Detail",
    component: Detail,
    props:true
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/kategoriproduk/:id_kategori",
    name: "KategoriProduk",
    component: KategoriProduk,
    props: true
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;