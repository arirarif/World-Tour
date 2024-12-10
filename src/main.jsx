import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider"; // Import the AuthProvider
import Layout from "./components/Layout";
import Home from "./components/Home";
import AddVisa from "./components/AddVisa"; // AddVis
import UpdateVisa from "./components/UpdateVisa"; // Import UpdateVisa
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Users from "./components/Users";
import PrivateRoute from "./components/PrivateRoute";
import CountryView from "./components/CountryView";
import AllVisas from './components/AllVisas';  // Import AllVisas component
import VisaDetails from './components/VisaDetails';  // Import VisaDetails component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "addVisa",
        element: (
          <PrivateRoute>
            <AddVisa />
          </PrivateRoute>
        ), // Protect Add Visa content
      },
      {
        path: "updateVisa/:id", // New UpdateVisa route
        element: (
          <PrivateRoute>
            <UpdateVisa />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/visa/${params.id}`), // Fetch visa data by ID
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "users",
        element: <Users />,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "viewVisa/:id", // Protect this route with PrivateRoute
        element: (
          <PrivateRoute>
            <CountryView />
          </PrivateRoute>
        ),
      },
      // New Routes for AllVisas and VisaDetails
      {
        path: "allVisas", // All Visas route
        element: <AllVisas />,
      },
      {
        path: "visa/:id", // Visa Details route with dynamic ID
        element: <VisaDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
