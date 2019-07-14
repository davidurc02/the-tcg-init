import React from 'react'

export const ProtectedRoutes = [
	{
		path: '/protected',
		exact: true,
		component: () => <>PROTECTED #1</>,
	},
];