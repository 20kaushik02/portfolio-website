import * as React from 'react';
import { Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
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
import Tooltip from '@mui/material/Tooltip';

import LandingIcon from '@mui/icons-material/Home';
import ProjectsIcon from '@mui/icons-material/AccountTree';
import CareerIcon from '@mui/icons-material/Work';
import InterestsIcon from '@mui/icons-material/Headphones';
import ArticleIcon from '@mui/icons-material/Article';
import BlogIcon from '@mui/icons-material/RateReview';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import Landing from './Landing';
// import LoremIpsum from './LoremIpsum';
import Projects from './Projects';
import Career from './Career';
import { handleLinkClick } from '../utils/linkClick';
import UnderConstruction from './UnderConstruction';
import { ColorModeContext } from '../App';

const drawerWidth = 240;

const menuSections = [
	{
		key: 'landing', path: '/', display_name: 'About', appbar_text: 'Hello There!', display_icon: <LandingIcon />,
		extLink: false, component: <Landing />
	},
	{
		key: 'exp', path: '/work', display_name: 'Work', appbar_text: 'Journey', display_icon: <CareerIcon />,
		extLink: false, component: <Career />
	},
	{
		key: 'proj', path: '/stuff', display_name: 'Stuff', appbar_text: 'Workbench', display_icon: <ProjectsIcon />,
		extLink: false, component: <Projects />
	},
	{
		key: 'ints', path: '/interests', display_name: 'Interests', appbar_text: 'My Interests', display_icon: <InterestsIcon />,
		extLink: false, component: <UnderConstruction />
	},
	{
		key: 'resume', display_name: 'Resume/CV', appbar_text: 'Resume/CV', display_icon: <ArticleIcon />,
		extLink: true, link: process.env.PUBLIC_URL + "myresume.pdf"
	},
	{
		key: 'blog', display_name: 'My Scribbles', appbar_text: 'My Scribbles', display_icon: <BlogIcon />,
		extLink: true, link: "https://blog.knravish.me"
	},
];

const internalSections = menuSections.filter(menuItem => menuItem.extLink === false);

function Menu(props) {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [isClosing, setIsClosing] = React.useState(false);
	const { mode, toggleMode } = React.useContext(ColorModeContext);
	const location = useLocation();
	const navigate = useNavigate();

	const activeSection = internalSections.find((menuItem) => menuItem.path === location.pathname)
		|| internalSections[0];

	React.useEffect(() => {
		document.title = `Kaushik | ${activeSection.display_name}`;
	}, [activeSection]);

	const handleDrawerClose = () => {
		setIsClosing(true);
		setMobileOpen(false);
	};

	const handleDrawerTransitionEnd = () => {
		setIsClosing(false);
	};

	const handleDrawerToggle = () => {
		if (!isClosing) {
			setMobileOpen(!mobileOpen);
		}
	};

	const handleDrawerSelect = (selectedSectionKey) => {
		handleDrawerClose();
		const menuSection = menuSections.filter((menuItem) => menuItem.key === selectedSectionKey)[0];
		navigate(menuSection.path);
	}

	const drawer = (
		<div>
			{/* <Toolbar /> */}
			<Box component="div" align="center" padding={2}>
				<Avatar src={process.env.PUBLIC_URL + "pappu2.jpg"} alt='profile pic' sx={{ width: 120, height: 120 }} />
				<Typography sx={{ padding: 2 }}>Kaushik Narayan Ravishankar</Typography>
			</Box>
			<Divider />
			<List>
				{menuSections.filter(menuItem => menuItem.extLink === false).map(menuItem => (
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
			<List>
				{menuSections.filter(menuItem => menuItem.extLink === true).map(menuItem => (
					<ListItem onClick={() => { handleLinkClick(menuItem.link); }} key={menuItem.key} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{menuItem.display_icon}
							</ListItemIcon>
							<ListItemText primary={menuItem.display_name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<Box component="div" align="center" padding={2}>
				<Link sx={{ padding: 1 }} href="https://mui.com" underline="hover">
					Made with MUI
				</Link>
			</Box>
		</div>
	);

	return (
		<Box sx={{ display: 'flex' }}>
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
					<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
						{activeSection.appbar_text}
					</Typography>
					<Tooltip title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
						<IconButton color="inherit" aria-label="toggle color mode" onClick={toggleMode}>
							{mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
						</IconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="page links"
			>
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onTransitionEnd={handleDrawerTransitionEnd}
					onClose={handleDrawerClose}
					slotProps={{
						root: {
							keepMounted: true, // Better open performance on mobile.
						},
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
			<Box
				component="main"
				sx={{ flexGrow: 1, padding: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
			>
				<Toolbar />
				<Routes>
					{internalSections.map((menuItem) => (
						<Route key={menuItem.key} path={menuItem.path} element={menuItem.component} />
					))}
					<Route path="*" element={<Navigate to={internalSections[0].path} replace />} />
				</Routes>
			</Box>
		</Box>
	);
}

export default Menu;
