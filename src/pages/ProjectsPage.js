import React, { useState } from 'react';
import projects from '../data/projects';
import { MainLayout, InnerLayout } from '../styles/Layout';
import Title from '../components/Title';
import Menu from './../components/Menu';
import Button from './../components/Button';

const allButtons = ['All', ...new Set(projects.map(item => item.category))]

function ProjectsPage() {
    const [menuItem, setMenuItems] = useState(projects);
    const [button, setButtons] = useState(allButtons);

    const filter = (button) => {

        if (button === 'All') {
            setMenuItems(projects);
            return;
        }

        const filteredData = projects.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <MainLayout>
            <Title title={'Projects'} span={'Projects'} />
            <InnerLayout>
                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default ProjectsPage