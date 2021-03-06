import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { Link as RouterLink } from 'react-router-dom';

import { DashboardDispatch } from '.'

import { dashboard as config } from '../../../config.json'

const drawerWidth = 240;
const navOptions = config.navigation_labels;

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
}));

const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)

export default function MiniDrawer(props) {
	const classes = useStyles();
	const theme = useTheme();
	const dispatch = useContext(DashboardDispatch)

	return (
		<Drawer
			variant="permanent"
			className={clsx(classes.drawer, {
				[classes.drawerOpen]: props.open,
				[classes.drawerClose]: !props.open,
			})}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: props.open,
					[classes.drawerClose]: !props.open,
				}),
			}}
			open={props.open}
		>
			<div className={classes.toolbar}>
				<IconButton onClick={() => dispatch()}>
					{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
				</IconButton>
			</div>
			<Divider />
			<List>
				{navOptions.map((option, index) => (
					<ListItem button
						key={index}
						to={`/${option.id}`}
						component={AdapterLink}
						onClick={() => console.log(`to -> /${option.id}`)}
					>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={`${option.label}`} />
					</ListItem>
				))}
			</List>
			<Divider />
		</Drawer>
	);
}