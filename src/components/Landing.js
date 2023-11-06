import React from 'react';
import { Button, ButtonGroup, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import { handleLinkClick } from '../utils/linkClick';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
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
				{/* one-liner summary */}
				<ListItem>
					<ListItemText
						primary={"I'll be brief: Aspiring SWE whose passions lie in cloud technologies,\
						web development and machine learning, but open to much more."} />
				</ListItem>
				{/* education, for now */}
				<ListItem>
					<ListItemText
						primary={"I'm currently pursuing my masters in computer\
					science at ASU, and will be graduating in the summer of 2025."} />
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
				{/* last stint */}
				<ListItem>
					<ListItemText
						primary={"Yes it's a simple website, and yes it's not finished yet :)"} />
				</ListItem>
			</List>
			<Divider />
			<Typography paragraph p={1}>
				More at:
			</Typography>
			<ButtonGroup
				size="large"
				variant="outlined"
				aria-label="social media links button group">
				{socialsData.map((social) => (
					<Button
						key={social.key}
						onClick={() => handleLinkClick(social.socialLink)}
					>
						{social.socialIcon}
					</Button>
				))}
			</ButtonGroup>
		</>
	)
}

export default Landing;