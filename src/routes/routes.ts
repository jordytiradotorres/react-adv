import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
// import { LazyPage1 } from '../01-lazyload/pages';
import { NoLazy } from "../01-lazyload/pages/NoLazy";
import {
  RegisterPage,
  FormikAbstraction,
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
} from "../03-forms/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: Route[] = [
  {
    path: "/register/*",
    to: "/register/",
    Component: RegisterPage,
    name: "Register Page",
  },
  {
    path: "/formik-basic/*",
    to: "/formik-basic/",
    Component: FormikBasicPage,
    name: "Formik basic",
  },
  {
    path: "/formik-yup/*",
    to: "/formik-yup/",
    Component: FormikYupPage,
    name: "Formik Yup",
  },
  {
    path: "/formik-components/*",
    to: "/formik-components/",
    Component: FormikComponents,
    name: "Formik Components",
  },
  {
    path: "/formik-abstraction/*",
    to: "/formik-abstraction/",
    Component: FormikAbstraction,
    name: "Formik abstraction",
  },
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "LazyLayout - Dash",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
