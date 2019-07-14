import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { renderRoutes } from 'react-router-config';

import useStyles from './indexStyles'
import MiniAppBar from './MiniAppBar'
import MiniDrawer from './MiniDrawer'
import MiniContent from './MiniContent'

export const DashboardDispatch = React.createContext(null)

export default function MiniDrawerIndex(props) {
	const classes = useStyles();
	//const [open, setOpen] = React.useState(true);
	const [open, dispatchOpen] = React.useReducer(handleDrawerToggle, true);

	function handleDrawerToggle(openState, action) {
		return !openState
	}

	return (
		<DashboardDispatch.Provider value={dispatchOpen}>
			<div className={classes.root}>
				<CssBaseline />
				<MiniAppBar open={open} />
				<MiniDrawer open={open} />
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<MiniContent />
					{renderRoutes(props.route.routes)}
				</main>
			</div>
		</DashboardDispatch.Provider>
	);
}