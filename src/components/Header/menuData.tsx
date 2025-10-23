import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Research",
    path: "/research",
    newTab: false,
  },
  {
    id: 3,
    title: "People",
    path: "/people",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "News",
    path: "/news",
    newTab: false,
  },
  {
    id: 6,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Research Page",
        path: "/research",
        newTab: false,
      },
      {
        id: 62,
        title: "People Page",
        path: "/people",
        newTab: false,
      },
      {
        id: 63,
        title: "Contact",
        path: "/contact",
        newTab: false,
      },
      {
        id: 64,
        title: "News Page",
        path: "/news",
        newTab: false,
      },
      {
        id: 68,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
