import React from 'react';
import styled from 'styled-components';


function ContactItem({ title, icon, cont1, cont2, link, linkCont }) {
    return (
        <ContactItemStyled>
            <a href={link} target="_blank" rel="noreferrer noopener">
                <div className="left-content">
                    {icon}
                </div>
            </a>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{cont1}</p>
                <p>{cont2}</p>
                <a href={link} target="_blank" rel="noreferrer noopener">{linkCont}</a>
            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
    padding:1.5rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    transition: all 0.4s ease-in-out;
    &:hover {
        transform: translateY(-0.2rem);
    }
    @media screen and (max-width:600px) {
        width: 90%;
    }
    &:not(:last-child){
        margin-bottom: 2.5rem;
    }
    .left-content{
        padding: 1.5rem;
        border: 1px solid var(--border-color);
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        &:hover {
            border-color: var(--primary-color);
            cursor: pointer;
        }
        svg{
            font-size: 2.3rem;
        }
    }
    .right-content{
        h6{
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }
        p{
            padding: .1rem 0;
        }
        a {
            font-size: 1.2rem;
            padding: .1rem 0;
        }
    }
`;

export default ContactItem;