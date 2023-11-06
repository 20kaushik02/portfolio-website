import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

export const experiencesData = [
  {
    key: 'sde-intern-rq', type: 'prof', location: 'RootQuotient Technologies', designation: 'Software Developer Intern',
    desc: [
      'Developed interactive user interfaces for client applications using ReactJS, TypeScript, and the Ant Design library.',
      // eslint-disable-next-line
      'Implemented a comprehensive admin dashboard for a client’s banking administration application, following MVC\
      patterns for seamless backend integration.',
      'Actively contributed to bug fixes and enhanced an internal package by adding API documentation.'
    ],
    startDate: 'May 2022', endDate: 'July 2022'
  },
  {
    key: 'tech-sd-ctf', type: 'extra', location: 'CEG Tech Forum', designation: 'Student Director of Technical Operations',
    desc: [
      'Headed a 20-member strong technical operations team as the Lead Developer, Sysadmin, and Project Manager.',
      // eslint-disable-next-line
      'Spearheaded multiple web apps developed for various purposes, such as a custom ERP mobile app, admin dashboards,\
      and the flagship website for Kurukshetra, the international techno-management fest of CEG.',
      // eslint-disable-next-line
      'Organized a technical summit on "Innovation and Transformation: AI, Autonomous Systems, and Disruptive Trends"\
      featuring projects by local innovators and keynotes from BNY Mellon, Microsoft, and startups.'
    ],
    startDate: 'July 2022', endDate: 'July 2023'
  },
  {
    key: 'sec-nss', type: 'extra', location: 'National Service Scheme', designation: 'Secretary',
    desc: [
      'Organized cleanliness campaigns, awareness rallies, and the annual village development camp.',
      'Conducted a 3-day city-wide waste collection and awareness drive in collaboration with AWCEM, Chennai.'
    ],
    startDate: 'Nov 2021', endDate: 'Oct 2022'
  },
  {
    key: 'cs-ms-asu', type: 'edu', location: 'Arizona State University', designation: 'MS, Computer Science',
    desc: [
      // Add relevant coursework in the future
    ],
    startDate: 'Aug 2023', endDate: 'May 2025'
  },
  {
    key: 'cse-be-ceg', type: 'edu', location: 'College of Engineering, Guindy', designation: 'BE, Computer Science and Engineering',
    desc: [
      'Graduated first-class with distinction with a 9.12 CGPA',
      'Relevant coursework: DBMS, OOPS, full-stack development, cloud computing, deep learning, computer networks',
    ],
    startDate: 'Aug 2023', endDate: 'May 2025'
  },
];

const Career = () => {
  return (
    <>
      <Typography p={1} align="left" variant="h5">
        Professional
      </Typography>
      {experiencesData.filter(exp => exp.type === 'prof').map(exp =>
        <>
          <Typography p={1} align="left" fontSize={16}>
            <b>{exp.designation}, {exp.location}</b>, <i>{exp.startDate} - {exp.endDate}</i>
          </Typography>
          <Typography p={1} align="left">
            <List disablePadding>
              {exp.desc.map((line, index) =>
                <ListItem disablePadding key={index}>
                  <ListItemText primaryTypographyProps={{ p: 0, fontSize: 13 }} primary={line} />
                </ListItem>
              )}
            </List>
          </Typography>
        </>
      )}
      <Divider />
      <Typography p={1} align="left" variant="h5">
        Education
      </Typography>
      {experiencesData.filter(exp => exp.type === 'edu').map(exp =>
        <>
          <Typography p={1} align="left" fontSize={16}>
            <b>{exp.designation}, {exp.location}</b>, <i>{exp.startDate} - {exp.endDate}</i>
          </Typography>
          <Typography p={1} align="left">
            <List disablePadding>
              {exp.desc.map((line, index) =>
                <ListItem disablePadding key={index}>
                  <ListItemText primaryTypographyProps={{ p: 0, fontSize: 13 }} primary={line} />
                </ListItem>
              )}
            </List>
          </Typography>
        </>
      )}
      <Divider />
      <Typography p={1} align="left" variant="h5">
        Volunteering
      </Typography>
      {experiencesData.filter(exp => exp.type === 'extra').map(exp =>
        <>
          <Typography p={1} align="left" fontSize={16}>
            <b>{exp.designation}, {exp.location}</b>, <i>{exp.startDate} - {exp.endDate}</i>
          </Typography>
          <Typography p={1} align="left">
            <List disablePadding>
              {exp.desc.map((line, index) =>
                <ListItem disablePadding key={index}>
                  <ListItemText primaryTypographyProps={{ p: 0, fontSize: 13 }} primary={line} />
                </ListItem>
              )}
            </List>
          </Typography>
        </>
      )}
    </>
  )
}

export default Career;