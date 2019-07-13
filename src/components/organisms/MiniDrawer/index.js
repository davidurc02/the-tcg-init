import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router, Route, Switch } from "react-router";

import MiniAppBar from './MiniAppBar'
import MiniDrawer from './MiniDrawer'
import MiniContent from './MiniContent'
import RouterTest from './RouterTest'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}))


export const DashboardDispatch = React.createContext(null)

export default function MiniDrawerIndex() {
	const classes = useStyles();
	//const [open, setOpen] = React.useState(true);
	const [open, dispatchOpen] = React.useReducer(handleDrawerToggle, true);

	function handleDrawerToggle(openState, action) {
		console.log('handleDrawerToggle')
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
					<RouterTest />
				</main>
			</div>
		</DashboardDispatch.Provider>
	);
}