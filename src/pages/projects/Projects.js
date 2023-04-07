// Styles
import './Projects.css';

// Assests
import projects from '../../assets/projects.json';

// Components
import { ProjectCard } from '../../components/projectscard/ProjectCard';

// Libraries
import AOS from 'aos';
import 'aos/dist/aos.css';

// Hooks
import { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    function formatTitle(title) {
        return title.toLowerCase().split(' ').join('-');
    }

    const myProjects = projects.map((project, index) => {
        return (
            <ProjectCard
                title={formatTitle(project.title)}
                img={project.img}
                sdesc={project.sdesc}
                desc={project.desc}
                url={project.url}
                repo={project.repo}
                key={index}
            />
        );
    });

    return (
        <section
            className='projects-page pb-3 py-md-3 px-2 bg-gradient'
            data-aos='fade-up'
            data-aos-delay='300'
        >
            <div className='container my-5'>
                <div className='row'>
                    <div className='col'>
                        <h2 className='title projects-title text-center my-5'>
                            Projects
                        </h2>
                        <p className='intro projects-intro text-center fs-5'>
                            Please take a look at at some of the projects I've
                            done over the last few months.
                        </p>
                        <hr />
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 d-flex justify-content-center my-projects h-100'>
                    {myProjects}
                </div>
            </div>
        </section>
    );
};

export default Projects;
