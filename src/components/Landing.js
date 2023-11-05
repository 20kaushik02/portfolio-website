import React from 'react';
import { Button, ButtonGroup, List, ListItem, ListItemText, Typography } from '@mui/material';
import { handleButtonClick } from '../utils/linkClick';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { projectsData } from './Projects';

const socialsData = [
	{ key: 'github', socialText: 'GitHub', socialLink: 'https://github.com/20kaushik02', socialIcon: <GitHubIcon /> },
	{ key: 'linkedin', socialText: 'LinkedIn', socialLink: 'https://linkedin.com/in/kaushik-ravishankar', socialIcon: <LinkedInIcon /> },
	{ key: 'email', socialText: 'Email', socialLink: 'mailto:hello@knravish.me', socialIcon: <EmailIcon /> },
];

const Landing = () => {
	return (
		<>
			<List>
				{/* one-liner summary */}
				<ListItem>
					<ListItemText
						primary={"TL;DR: Aspiring SWE whose passions lie in cloud technologies,\
						web development and machine learning, but open to much more."} />
				</ListItem>
				{/* intro with education */}
				<ListItem>
					<ListItemText
						primary={"I'm currently pursuing my masters in computer\
					science at ASU, and will be graduating in the summer of 2025."} />
				</ListItem>
				{/* current stuff and last stint */}
				<ListItem>
					<ListItemText
						primary={"Recently, I've been tinkering with " + projectsData[0].oneliner + ". My last stint was at *insert recent experience* as a\
						*insert recent role*, *insert recent role's description*."} />
				</ListItem>
			</List>
			<Typography paragraph>
				Reach me at:
			</Typography>
			<ButtonGroup
				size="large"
				variant="outlined"
				aria-label="social media links button group">
				{socialsData.map((social) => (
					<Button
						key={social.key}
						onClick={() => handleButtonClick(social.socialLink)}
					>
						{social.socialIcon}
					</Button>
				))}
			</ButtonGroup>
		</>
	)
}

export default Landing;