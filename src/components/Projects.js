import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, List, ListItem, ListItemText, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { handleButtonClick } from '../utils/linkClick';

export const projectsData = [
	{
		key: 'fyp-tcp-rl', oneliner: 'adversarial attacks on reinforcement learning-based congestion control for TCP',
		name: 'Implementation of RL based TCP congestion control schemes and their performance evaluation under adversarial attacks',
		img: 'fyp-tcp-rl.png',
		desc: [
			'Implementation of reinforcement learning based TCP congestion control mechanisms, namely deep Q-learning and PPO models,\
			which were 2% more performant than existing algorithms.',
			'Then, demonstrated that performance under simple adversarial attacks was dampened by 40%.',
			'Utilized the ns-3 network simulator, TensorFlow and OpenAI’s Gym framework for reinforcement learning.'
		],
		tools: ['ns3', 'TensorFlow', 'OpenAI Gym'],
		link: 'https://github.com/harish3030/FYP-TCP-RL'
	},
]
const Projects = () => {
	const ProjectCard = (project) => {
		return (
			<Card scroll="paper" sx={{ maxWidth: 325 }} key={project.key}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image={process.env.PUBLIC_URL + "Projects/" + project.img}
						alt={project.name}
					/>
					<CardContent align="left">
						<Typography gutterBottom primaryTypographyProps={{ fontSize: 16}} component="div">
							{project.name}
						</Typography>
						<List>
							{project.desc.map((line) =>
								<ListItem>
									<ListItemText primaryTypographyProps={{ fontSize: 12}} primary={line} />
								</ListItem>
							)}
						</List>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button onClick={() => handleButtonClick(project.link)} className="CheckButton">
						Check it out
					</Button>
				</CardActions>
			</Card>
		)
	}
	return (
		<>
			<Carousel navButtonsAlwaysVisible cycleNavigation animation='slide'>
				{projectsData.map(project => ProjectCard(project))}
			</Carousel>
		</>
	)
}

export default Projects;