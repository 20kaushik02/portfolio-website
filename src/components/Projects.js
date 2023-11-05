import React, { useContext } from 'react';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Pagination, Navigation, EffectFade } from "swiper/modules";

import { WidthContext } from '../App';
import { handleButtonClick } from '../utils/linkClick';

export const projectsData = [
	{
		key: 'fyp-tcp-rl', oneliner: 'adversarial attacks on reinforcement learning-based congestion control for TCP',
		name: 'TCP-RL',
		img: 'fyp-arch-diag.png',
		desc: [
			'Implemented RL based TCP congestion control (deep Q-learning and PPO models), which were 2% more performant\
			compared to TCPNewReno.',
			'Demonstrated that performance under simple adversarial attacks was dampened by 40%.',
			'Utilized the ns-3 network simulator, TensorFlow and OpenAI’s Gym framework.'
		],
		tools: ['ns3', 'TensorFlow', 'OpenAI Gym'],
		link: 'https://github.com/harish3030/FYP-TCP-RL'
	},
	{
		key: 'k-site-2023', oneliner: 'the flagship website for Kurukshetra CEG',
		name: 'Kurukshetra 2023',
		img: 'k-site-landing.png',
		desc: [
			'Flagship website for the 2023 edition of Kurukshetra, CEG\'s international techno-management fest.',
			'Handled a peak of 10,000 daily users and transactions',
			'Built with React and Express.js',
		],
		tools: ['React', 'Express.js', 'AWS'],
		link: 'https://k23.kurukshetraceg.org.in'
	},
	{
		key: 'donut-eat-me', oneliner: 'a 3D pastry-themed action platformer',
		name: 'Donut Eat Me',
		img: 'donut-eat-me-gameplay.png',
		desc: [
			'An isometric 3D pastry-themed action platformer where you play as a donut and fight other pastries!',
			'Made with Unity, all assets designed with Blender.',
		],
		tools: ['Blender', 'Unity'],
		link: 'https://kirangeorge.itch.io/donut-eat-me'
	},
	{
		key: 'aunms', oneliner: '',
		name: 'Network Monitor',
		img: 'aunms-packet-capture.png',
		desc: [
			'A simple Wireshark-like network monitoring tool to monitor live network traffic and devices',
			'Developed using scapy and PyQt.',
		],
		tools: ['Python', 'Qt', 'scapy'],
		link: 'https://kirangeorge.itch.io/donut-eat-me'
	},
]
const Projects = () => {
	const width = useContext(WidthContext);
	const ProjectCard = ({ project }) => {
		return (
			<Card sx={{ maxWidth: 400 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image={process.env.PUBLIC_URL + "Projects/" + project.img}
						alt={project.name}
						onClick={() => handleButtonClick(process.env.PUBLIC_URL + "Projects/" + project.img)}
					/>
					<CardContent align="left">
						<Typography gutterBottom primaryTypographyProps={{ fontSize: 16 }} component="div">
							{project.name}
						</Typography>
						<List>
							{project.desc.map((line, index) =>
								<ListItem disableGutters key={index}>
									<ListItemText primaryTypographyProps={{ fontSize: 12 }} primary={line} />
								</ListItem>
							)}
						</List>
						<Box>
							{project.tools.map((tool, index) =>
								<Chip key={index} label={tool} />
							)}
						</Box>
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
			<Box sx={{
				width: '100%',
				height: '100%',
				maxWidth: '90vw',
				maxHeight: '100vh',
				minWidth: 0,
				minHeight: 0
			}} variant="div">
				<Swiper
					modules={[Pagination, Navigation, EffectFade]}
					pagination={{
						dynamicBullets: true,
					}}
					navigation
					speed={400}
					spaceBetween={10}
					slidesPerView={width >= 480 ? 2.4 : 1.1}
					// centeredSlides
					grabCursor
				>
					{projectsData.map((project) =>
						<SwiperSlide sx={{
							width: 'auto',
							flexShrink: 0, height: '90%'
						}} key={project.key}>
							<ProjectCard project={project} />
						</SwiperSlide>
					)}
				</Swiper>
			</Box>
		</>
	)
}

export default Projects;