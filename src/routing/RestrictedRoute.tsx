import { Navigate, Outlet } from "react-router";
import { routes } from "@/constants/routes";

const RestrictedRoute = () => {
	const auth = {
		token: true,
	};

	return auth.token ? (
		<Navigate
			to={routes.HOME}
			replace
		/>
	) : (
		<Outlet />
	);
};

export default RestrictedRoute;
