import { renderRoutes } from 'react-router-config';
import { publicRoutes, fallbackRoute } from './public';
import { ProtectedRoutes } from './protected';

export const allRoutes = [
	...publicRoutes,
	...ProtectedRoutes,
	...fallbackRoute
];

export const routes = (props = {}) => renderRoutes(allRoutes, props);