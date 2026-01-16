import { Button, ButtonGroup, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import { projectsData } from './Projects';
import { experiencesData } from './Career';

const socialsData = [
	{ key: 'github', socialText: 'GitHub', socialLink: 'https://github.com/20kaushik02', socialIcon: <GitHubIcon /> },
	{ key: 'linkedin', socialText: 'LinkedIn', socialLink: 'https://linkedin.com/in/kaushik-ravishankar', socialIcon: <LinkedInIcon /> },
	{ key: 'email', socialText: 'Email', socialLink: 'mailto:hello@knravish.me', socialIcon: <EmailIcon /> },
];

const Landing = () => {
	return (
		<>
			<List>
				{/* summary */}
				<ListItem>
					<ListItemText
						primary={"Welcome to my (messy) homepage. I like data!\
							My passions lie in data engineering/analytics, distributed technologies,\
							networks and security, web development, machine learning...\
							you get the picture." } />
				</ListItem>
				{/* current endeavor */}
				<ListItem>
					<ListItemText
						primary={"I'm always interested in discussing data systems or networks or any of the above. Ping me!"} />
				</ListItem>
				{/* current stuff */}
				<ListItem>
					<ListItemText
						primary={"Recently, I've been tinkering with " + projectsData[0].oneliner + "."} />
				</ListItem>
				{/* last stint */}
				<ListItem>
					<ListItemText
						primary={"My last stint was at " +
							experiencesData.filter(exp => exp.type === 'prof')[0].location + " as a " +
							experiencesData.filter(exp => exp.type === 'prof')[0].designation + "."} />
				</ListItem>
			</List>
			<Divider />
			<Typography p={2}>
				More at:
			</Typography>
			<ButtonGroup
				size="large"
				variant="outlined"
				aria-label="social media links button group">
				{socialsData.map((social) => (
					<Button
						key={social.key}
						component={Link}
						href={social.socialLink}
						startIcon={social.socialIcon}
					>
						{social.socialText}
					</Button>
				))}
			</ButtonGroup>
		</>
	)
}

export default Landing;