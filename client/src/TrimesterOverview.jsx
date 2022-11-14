import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Alert, Chip, Icon, Stack, Typography } from '@mui/material';
import CourseOverview from './CourseOverview';
import { SessionContext } from './GradesOverview';

const TrimesterOverview = ({triInfo}) => {
    const courses = React.useContext(SessionContext).courses;

    return (
        <Accordion defaultExpanded={triInfo.isActive}>
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                <Typography sx={{paddingTop: 0.5}}> Trimester {triInfo.tri} </Typography>
                { 
                    triInfo.isActive ? 
                    <Chip label="Current" color="success" sx={{marginLeft: 1}} /> :
                    triInfo.isFinished ?
                    <Chip label="Finished" color="secondary" sx={{marginLeft: 1}} /> :
                    <Chip label="Inactive" color="default" sx={{marginLeft: 1}} /> 
                } 
            </AccordionSummary>
            <AccordionDetails>
                <Stack spacing={2}>
                    {
                        courses[triInfo.tri - 1][0] ?
                        courses[triInfo.tri - 1].map((courseInfo) => {
                            return (
                                <CourseOverview key={courseInfo.code} courseInfo={courseInfo} />
                            )
                        }) :
                        <Alert severity="warning" sx={{marginTop: 1}}> No courses added to this trimester yet. </Alert>
                    }
                </Stack>
            </AccordionDetails>
        </Accordion>
    )
}

export default TrimesterOverview;