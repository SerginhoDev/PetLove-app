import { createBrowserRouter, Navigate } from "react-router";
import { routes } from "@/constants/routes";

import MainLayout from "@/layouts/MainLayout";

import HomePage from "@/pages/HomePage/HomePage";
import NewsPage from "@/pages/NewsPage/NewsPage";
import NoticesPage from "@/pages/NoticesPage/NoticesPage";
import FriendsPage from "@/pages/FriendsPage/FriendsPage";
import RegisterPage from "@/pages/RegisterPage/RegisterPage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import ProfilePage from "@/pages/ProfilePage/ProfilePage";
import AddPetPage from "@/pages/AddPetPage/AddPetPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ index: true, element: <Navigate to={routes.HOME} /> },
			{ path: routes.HOME, element: <HomePage /> },
			{ path: routes.NEWS, element: <NewsPage /> },
			{ path: routes.NOTICES, element: <NoticesPage /> },
			{ path: routes.FRIENDS, element: <FriendsPage /> },
			{
				element: <PrivateRoute />,
				children: [
					{ path: routes.ADD_PET, element: <AddPetPage /> },
					{ path: routes.PROFILE, element: <ProfilePage /> },
				],
			},
			{
				element: <RestrictedRoute />,
				children: [
					{ path: routes.REGISTER, element: <RegisterPage /> },
					{ path: routes.LOGIN, element: <LoginPage /> },
				],
			},
			{ path: routes.NOT_FOUND, element: <NotFoundPage /> },
		],
	},
]);
