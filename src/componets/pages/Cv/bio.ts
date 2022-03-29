import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const BioSection = styled(Box)`
    padding-left: 3.4rem;
    text-indent: -3.4rem; 
    color: #cdcdff;
    margin: 0px 0px 50px 70px;

    @media screen and (max-width: 1100px) {
        margin: 0px 0px 50px 0px;
    }
`

export const BioYear = styled.span`
    font-weight: bold;
    margin-right: 1rem;
    color: #cdcdff;
`

export const Bio = styled(Box)`
    width: 1000px;
    height: 270px;

    @media screen and (max-width: 1100px) {
        width: 550px;
    }

    @media screen and (max-width: 570px) {
        width: 350px;
        height: 335px;
    }

    @media screen and (max-width: 450px) {
        width: 330px;
    }

    @media screen and (max-width: 360px) {
        width: 280px;
        height: 380px;
    }

    @media screen and (max-width: 290px) {
        width: 250px;
        height: 340px;
    }
`