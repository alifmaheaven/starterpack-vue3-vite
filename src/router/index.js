import { createRouter, createWebHistory } from "vue-router";
// import SideMenu from "../layouts/side-menu/Main.vue";
// import Login from "../views/page-auth/Login.vue";
import adminLayout from "../layouts/adminLayout.vue";
import Home from "../views/home-page/Main.vue";

const routes = [
  // {
  //   path: "/login",
  //   name: "login",
  //   component: Login,
  //   meta: {
  //     breadcrumb: 'Login',
  //     requiresAuth: false,
  //     roles: [],
  //   },
  // },
  {
    path: "/",
    name: "home",
    component: adminLayout,
    redirect: { name: 'home' },
    meta: {
      breadcrumb: 'Home',
      requiresAuth: true,
      roles: [],
    },
    children: [
      {
        path: "",
        // name: "home",
        component: Home,
        meta: {
          // breadcrumb: 'Home',
          roles: [],
        },
      }
    ]
  },
  // {
  //   path: "/users-service",
  //   name: "users-service",
  //   component: SideMenu,
  //   redirect: { name: 'users' },
  //   meta: {
  //     breadcrumb: 'Users Service',
  //     requiresAuth: true,
  //     roles: ['PERURISPV', 'ADSPV', 'ADSTAFF', 'ADFINANCE', 'PEMUNGUTSPV', 'PEMUNGUTSTAFF', 'PEMUNGUTFINANCE'],
  //   },
  //   children: [
  //     {
  //       path: "users",
  //       meta: {
  //         breadcrumb: 'Users',
  //         roles: ['PERURISPV', 'ADSPV', 'PEMUNGUTSPV'],
  //       },
  //       children: [
  //         {
  //           path: "",
  //           name: "users",
  //           component: Users,
  //         },
  //         {
  //           path: "create",
  //           name: "create-user",
  //           component: UserCreate,
  //           meta: {
  //             breadcrumb: 'Create User',
  //           },
  //         },
  //         {
  //           path: "update",
  //           name: "update-user",
  //           component: UserUpdate,
  //           meta: {
  //             breadcrumb: 'Update User',
  //           },
  //         }
  //       ]
  //     }
  //   ]
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});


// router.beforeEach((to, from, next) => {
//   var needAuth = to.matched.some((route) => route.meta.requiresAuth);
//   var needRole = to.matched.some((route) => route.meta.roles);
//   var myrRole = useAuth().user?.role?.id;
//   var isLogin = useAuth().isAuth;

//   if (needAuth) {
//     if (isLogin) {
//       useNotification().getNotification();
//       if (needRole) {
//         if (to.meta.roles.includes(myrRole)) {
//           next();
//         } else {
//           switch(myrRole) {
//             case 'PERURISPV':
//               next({ name: "users-service" });
//               break;
//             case 'ADSPV':
//               next({ name: "users-service" });
//               break;
//             case 'PEMUNGUTSPV':
//               next({ name: "users-service" });
//               break;
//             case 'PEMUNGUTFINANCE':
//               next({ name: "settlement-service" });
//               break;
//             case 'ADFINANCE':
//               next({ name: "mutations" });
//               break;
//             case 'ADSTAFF':
//               next({ name: "purchase-request" });
//               break;
//             case 'PEMUNGUTSTAFF':
//               next({ name: "purchase-request" });
//               break;
//             default:
//               next();
//               break;
//           }
//         }
//       } else {
//         next();
//       }
//     } else {
//       next({ name: "login" });
//     }
//   } else {
//     if (isLogin) {
//       next({ name: "users-service" });
//     } else {
//       next();
//     }
//   }
// });

export default router;
