import HomePage from "./homepage/HomePage";
import AboutMe from "./about/AboutMe";
import ContactMe from "./contact/ContactMe";
import ErrorPage from "./ErrorPage";
import Layout from "../Layout";
const routes=[
    {
      path:"/",
      element:<Layout/>,
      errorElement:<ErrorPage/>,
      children: [
        {
            index: true,
            element: <HomePage/>,
        },
        {
            path: "about",
            element: <AboutMe/>,
        },
        {
            path: "contact",
            element: <ContactMe/>
        },
      ],
    },
];
export default routes;