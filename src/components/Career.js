import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import React, { Fragment } from 'react'

export const experiencesData = [
  {
    key: 'de-mrvl', type: 'prof', location: 'Marvell Technology', designation: 'Senior Engineer',
    desc: [
      'What do I do? Oh you know, bit of this (data engineering, modeling), bit of that (BI, data analysis), the occasional fun (software prototyping), but I\'m not done yet, still growing in the role.',
      'How do I bring value? Well, I bring a strong focus on inter-domain, cross-functional data architecture, primarily working with messy, big data.',
      'What would I like to work on next? Hmm, maybe some large-scale distributed problems. ML/DL is always fun to learn and apply. AI? Ehh, dulls the senses a bit sometimes.',
    ],
    startDate: 'Oct 2025', endDate: ''
  },
  {
    key: 'grad-res-asu', type: 'prof', location: 'Arizona State University', designation: 'Graduate Researcher',
    desc: [
      'Modelled the TCP protocol using high-level Petri nets to enable mathematical analysis of its state machine',
      'Modified the protocol model to design variants to help achieve censorship circumvention',
      'Employed CTL checking and Markov chain analysis to formally verify and test performance'
    ],
    startDate: 'Jan 2025', endDate: 'June 2025'
  },
  {
    key: 'sde-intern-rq', type: 'prof', location: 'RootQuotient Technologies', designation: 'Software Developer Intern',
    desc: [
      'Built user-friendly web applications using ReactJS, ExpressJS, TypeScript, and the Ant Design library',
      'Implemented a comprehensive admin dashboard for a client’s banking administration application, following MVC patterns for seamless backend integration.',
      'Actively contributed to fixing persistent bugs and enhanced internal packages by adding API documentation'
    ],
    startDate: 'May 2022', endDate: 'July 2022'
  },
  {
    key: 'tech-sd-ctf', type: 'extra', location: 'CEG Tech Forum', designation: 'Student Director - Technical Operations',
    desc: [
      'Headed a 20-member strong technical operations team as the Lead Developer, Sysadmin, and Project Manager',
      'Spearheaded multiple web apps developed for various purposes, such as a custom ERP mobile app, admin dashboards, and the flagship website for Kurukshetra, the international techno-management fest of CEG',
      'Organized a technical summit on "Innovation and Transformation: AI, Autonomous Systems, and Disruptive Trends" featuring projects by local innovators and keynotes from BNY Mellon, Microsoft, and startups'
    ],
    startDate: 'July 2022', endDate: 'June 2023'
  },
  {
    key: 'sec-nss', type: 'extra', location: 'National Service Scheme', designation: 'Secretary',
    desc: [
      'Organized cleanliness campaigns, awareness rallies, and the annual village development camp.',
      'Conducted a 3-day city-wide waste collection and awareness drive in collaboration with AWCEM, Chennai.'
    ],
    startDate: 'November 2021', endDate: 'October 2022'
  },
  {
    key: 'cs-ms-asu', type: 'edu', location: 'Arizona State University', designation: 'MS, Computer Science',
    desc: [
      'Learnt some more: OS, cloud computing, software security, network security, distributed databases'
    ],
    startDate: 'August 2023', endDate: 'May 2025'
  },
  {
    key: 'cse-be-ceg', type: 'edu', location: 'College of Engineering, Guindy', designation: 'BE, Computer Science and Engineering',
    desc: [
      'Learnt a lot: DBMS, OS, compilers, comp-arch., networking, network security and cryptography, cloud computing, distributed systems, deep learning, big data analytics, software project management',
    ],
    startDate: 'July 2019', endDate: 'June 2023'
  },
];

const Career = () => {
  return (
    <>
      <Typography p={2} align="left" variant="h5">
        Professional
      </Typography>
      {experiencesData.filter(exp => exp.type === 'prof').map((exp, idx) =>
        <Fragment key={idx}>
          <Typography px={2} align="left" fontSize={16}>
            <b>{exp.designation}, {exp.location}</b>, <i>{exp.startDate} - {exp.endDate}</i>
          </Typography>
          <Typography component="div" p={2} align="left">
            <List disablePadding sx={{ pl: 2, listStyleType: 'disc' }}>
              {exp.desc.map((line, index) =>
                <ListItem disablePadding key={index} sx={{ display: 'list-item' }}>
                  <ListItemText slotProps={{ primary: { fontSize: 13 } }} primary={line} />
                </ListItem>
              )}
            </List>
          </Typography>
        </Fragment>
      )}
      <Divider />
      <Typography p={2} align="left" variant="h5">
        Education
      </Typography>
      {experiencesData.filter(exp => exp.type === 'edu').map((exp, idx) =>
        <Fragment key={idx}>
          <Typography px={2} align="left" fontSize={16}>
            <b>{exp.designation}, {exp.location}</b>, <i>{exp.startDate} - {exp.endDate}</i>
          </Typography>
          <Typography component="div" p={2} align="left">
            <List disablePadding sx={{ pl: 2, listStyleType: 'disc' }}>
              {exp.desc.map((line, index) =>
                <ListItem disablePadding key={index} sx={{ display: 'list-item' }}>
                  <ListItemText slotProps={{ primary: { fontSize: 13 } }} primary={line} />
                </ListItem>
              )}
            </List>
          </Typography>
        </Fragment>
      )}
      <Divider />
      <Typography p={2} align="left" variant="h5">
        Volunteering
      </Typography>
      {experiencesData.filter(exp => exp.type === 'extra').map((exp, idx) =>
        <Fragment key={idx}>
          <Typography px={2} align="left" fontSize={16}>
            <b>{exp.designation}, {exp.location}</b>, <i>{exp.startDate} - {exp.endDate}</i>
          </Typography>
          <Typography component="div" p={2} align="left">
            <List disablePadding sx={{ pl: 2, listStyleType: 'disc' }}>
              {exp.desc.map((line, index) =>
                <ListItem disablePadding key={index} sx={{ display: 'list-item' }}>
                  <ListItemText slotProps={{ primary: { fontSize: 13 } }} primary={line} />
                </ListItem>
              )}
            </List>
          </Typography>
        </Fragment>
      )}
    </>
  )
}

export default Career;