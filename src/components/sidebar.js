import styled from "styled-components";
import Navigation from './navigation';
import React from "react";

function Sidebar({ navToggle }) {
    return (
        <SidebarStyled className={`${navToggle ? 'nav-toggle' : ''}`}>
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: all .4s ease-in-out;
    z-index:20;
    @media screen and (max-width: 1200px) {
        transform: translate(-100%);
        z-index:20;
    }
`;

export default Sidebar;