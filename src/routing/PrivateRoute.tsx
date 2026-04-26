import { Navigate, Outlet } from "react-router";
import { routes } from "@/constants/routes";

const PrivateRoute = () => {
	const auth = {
		token: false,
	};

	return auth.token ? (
		<Outlet />
	) : (
		<Navigate
			to={routes.LOGIN}
			replace
		/>
	);
};

export default PrivateRoute;
