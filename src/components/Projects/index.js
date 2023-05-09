import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Blocks } from 'react-loader-spinner';
import { LoadingPage, LoadingText } from './StyledElements';


const Projects = () => {

    const [loading, setLoading] = useState(false);

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
                        <div>Projects</div>
                    </>
                )}
        </div>
    );
}

export default Projects;