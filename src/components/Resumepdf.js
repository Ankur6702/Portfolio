import styled from "styled-components";
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from './../Assets/Ankur Agarwal.pdf';
import { useState, useEffect } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumePdf() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    return (
        <>
            <ResumePdfStyled>
                <Document file={pdf} >
                    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                </Document>
            </ResumePdfStyled>
        </>
    )
}

const ResumePdfStyled = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:-1;
    .react-pdf__Page__textContent {
        display: none;
    }
    .react-pdf__Page__annotations, .annotations {
        display: none;
    }
    .react-pdf__Page__canvas {
        @media screen and (max-width: 1400px) {
        width: 100% !important;
        height: 100% !important;
    }
`;

export default ResumePdf;