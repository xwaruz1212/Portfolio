import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Blocks } from 'react-loader-spinner';
import { BackLink, LoadingPage, LoadingText, ProjectsCard, ProjectsContainer, ProjectsSection, ProjectsText } from './StyledElements';
import MWebsite from '../../images/mwebsite.png'
import SMachine from '../../images/slot_machine.gif'
import OS from '../../images/onestop.png'
import PB from '../../images/progress.jpg'

const Projects = () => {

    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(false);

    const ShowText = () => {
        setActive(!active)
    };

    const [active2, setActive2] = useState(false);

    const ShowText2 = () => {
        setActive2(!active2)
    };


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <div>
            {loading ? (
                <LoadingPage>
                    <Blocks size={200} color={'white'} loading={loading} />
                    <LoadingText>Projects loading...</LoadingText>
                </LoadingPage>
            ) :
                (
                    <>
                        <ProjectsContainer>
                            <BackLink to="/">Back to main page</BackLink>
                            <ProjectsText>Projects</ProjectsText>
                            <ProjectsSection>
                                <ProjectsCard href='https://makislazos.netlify.app/'
                                    target="_blank"
                                    rel="noreferrer" >
                                    <img src={MWebsite} alt="" />
                                </ProjectsCard>
                                <ProjectsCard href='https://github.com/xwaruz1212/Slot-Machine'
                                    target="_blank"
                                    rel="noreferrer">
                                    <img src={SMachine} alt="" />
                                </ProjectsCard>
                                <ProjectsCard onClick={ShowText}>
                                    {active ? (
                                        <p>Since last year I am working part time for a company from London. I have oportunity to work with different technologies such as Javascript, React, MYSQL, PHP, Docker.</p>
                                    )
                                        :
                                        <img src={OS} alt="" />
                                    } </ProjectsCard>
                                <ProjectsCard onClick={ShowText2}>{active2 ? (
                                    <p>I am working on website for building company based in UK. I am developing it with React and Node.</p>
                                )
                                    :
                                    <img src={PB} alt="" />
                                }</ProjectsCard>
                            </ProjectsSection>
                        </ProjectsContainer>
                    </>
                )}
        </div>
    );
}

export default Projects;