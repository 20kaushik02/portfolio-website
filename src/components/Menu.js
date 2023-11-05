import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import LandingIcon from '@mui/icons-material/Home';
import ProjIcon from '@mui/icons-material/AccountTree';
import ExpIcon from '@mui/icons-material/Work';
import SkilIcon from '@mui/icons-material/Build';
import EduIcon from '@mui/icons-material/School';
import IntsIcon from '@mui/icons-material/SportsEsports';
import ArticleIcon from '@mui/icons-material/Article';

import Landing from './Landing';
import LoremIpsum from './LoremIpsum';
import Projects from './Projects';

const drawerWidth = 240;

const menuSections = [
	{ key: 'landing', display_name: 'Home', appbar_text: 'Hello There!', display_icon: <LandingIcon />, },
	{ key: 'proj', display_name: 'Projects', appbar_text: 'My Projects', display_icon: <ProjIcon />, },
	{ key: 'exp', display_name: 'Experiences', appbar_text: 'My Career', display_icon: <ExpIcon />, },
	{ key: 'skil', display_name: 'Skills', appbar_text: 'My Skills', display_icon: <SkilIcon />, },
	{ key: 'edu', display_name: 'Education', appbar_text: 'My Education', display_icon: <EduIcon />, },
	{ key: 'ints', display_name: 'Interests', appbar_text: 'My Interests', display_icon: <IntsIcon />, },
	{ key: 'resume', display_name: 'Resume', appbar_text: 'My Resume', display_icon: <ArticleIcon />, },
];

const menuSectionsData = [
	{ key: 'landing', component: <Landing /> },
	{ key: 'proj', component: <Projects /> },
	{ key: 'exp', component: <LoremIpsum /> },
	{ key: 'skil', component: <LoremIpsum /> },
	{ key: 'edu', component: <LoremIpsum /> },
	{ key: 'ints', component: <LoremIpsum /> },
	{ key: 'resume', component: <LoremIpsum /> },
];

export default function Menu(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [activeSection, setActiveSection] = React.useState('landing');

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			{/* <Toolbar /> */}
			<Box component="div" align="center" padding={2}>
				<Avatar src={process.env.PUBLIC_URL + "pappu2.jpg"} alt='' sx={{ width: 120, height: 120 }} />
				<Typography sx={{ padding: 2 }}>Kaushik Narayan Ravishankar</Typography>
			</Box>
			<Divider />
			<List>
				{menuSections.map((menuItem, index) => (
					<ListItem onClick={() => { handleDrawerToggle(); setActiveSection(menuItem.key); }} key={menuItem.key} disablePadding>
						<ListItemButton selected={activeSection === menuItem.key}>
							<ListItemIcon>
								{menuItem.display_icon}
							</ListItemIcon>
							<ListItemText primary={menuItem.display_name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			{/* <Box component="div" align="center" padding={2}>
				<Link sx={{ padding: 1 }} href="https://mui.com" underline="hover">
					Made with MUI
				</Link>
			</Box> */}
		</div>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						{menuSections.filter((menuItem) => menuItem.key === activeSection)[0].appbar_text}
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			{/* content goes here */}
			<Box
				component="main"
				sx={{ flexGrow: 1, padding: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
			>
				<Toolbar />
				{menuSectionsData.filter((menuItem) => menuItem.key === activeSection)[0].component}
			</Box>
		</Box>
	);
}
