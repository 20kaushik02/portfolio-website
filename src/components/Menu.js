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
// import Link from '@mui/material/Link';

import LandingIcon from '@mui/icons-material/Home';
import ProjIcon from '@mui/icons-material/AccountTree';
import ExpIcon from '@mui/icons-material/Work';
import SkilIcon from '@mui/icons-material/Laptop';
import IntsIcon from '@mui/icons-material/SportsEsports';
import ArticleIcon from '@mui/icons-material/Article';

import Landing from './Landing';
// import LoremIpsum from './LoremIpsum';
import Projects from './Projects';
import Career from './Career';
import { handleLinkClick } from '../utils/linkClick';
import UnderConstruction from './UnderConstruction';

const drawerWidth = 240;

const menuSections = [
	{
		key: 'landing', display_name: 'Home', appbar_text: 'Hello There!', display_icon: <LandingIcon />,
		extLink: false, component: <Landing />
	},
	{
		key: 'proj', display_name: 'Projects', appbar_text: 'My Projects', display_icon: <ProjIcon />,
		extLink: false, component: <Projects />
	},
	{
		key: 'exp', display_name: 'Career', appbar_text: 'My Journey', display_icon: <ExpIcon />,
		extLink: false, component: <Career />
	},
	{
		key: 'skil', display_name: 'Skills', appbar_text: 'My Skills', display_icon: <SkilIcon />,
		extLink: false, component: <UnderConstruction />
	},
	{
		key: 'ints', display_name: 'Interests', appbar_text: 'My Interests', display_icon: <IntsIcon />,
		extLink: false, component: <UnderConstruction />
	},
	{
		key: 'resume', display_name: 'Resume', appbar_text: 'My Resume', display_icon: <ArticleIcon />,
		extLink: true, link: process.env.PUBLIC_URL + "myresume.pdf"
	},
];

export default function Menu(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [activeSection, setActiveSection] = React.useState(menuSections[0]);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleDrawerSelect = (selectedSectionKey) => {
		handleDrawerToggle();
		const menuSection = menuSections.filter((menuItem) => menuItem.key === selectedSectionKey)[0];
		if (menuSection.extLink === true) {
			handleLinkClick(menuSection.link);
			return;
		}
		setActiveSection(menuSection);
	}

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
					<ListItem onClick={() => { handleDrawerSelect(menuItem.key); }} key={menuItem.key} disablePadding>
						<ListItemButton selected={activeSection.key === menuItem.key}>
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
						{activeSection.appbar_text}
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
				{activeSection.component}
			</Box>
		</Box>
	);
}
