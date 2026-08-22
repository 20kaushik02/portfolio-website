import { createTheme } from '@mui/material/styles';

// Central place to tweak the site's look and feel.
export const getAppTheme = (mode) => createTheme({
	palette: {
		mode,
		primary: {
			main: mode === 'dark' ? '#7ad0c9' : '#00695f',
		},
		secondary: {
			main: '#ef6c00',
		},
		background: mode === 'dark'
			? { default: '#121212', paper: '#1c1c1c' }
			: { default: '#f7f7f5', paper: '#ffffff' },
	},
	shape: {
		borderRadius: 10,
	},
	typography: {
		fontFamily: [
			'-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"',
			'sans-serif',
		].join(','),
		h5: {
			fontWeight: 600,
		},
	},
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					transition: 'transform 200ms ease, box-shadow 200ms ease',
					'&:hover': {
						transform: 'translateY(-4px)',
						boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
					},
				},
			},
		},
	},
});
