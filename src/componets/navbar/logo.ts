import { Link } from 'react-router-dom'
import styled from "@emotion/styled"
import { Box } from "@chakra-ui/react"

export const Logo = styled(Link)`
    text-decoration: none;
    color: #8193d8; 
    
    logo:hover{
        text-decoration: block;
        color: #cdcdff; 
    }
`

export const StyleLogo = styled(Box)`
    color: #8193d8;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 30px;

    @media screen and (max-width: 1400px){
        font-size: 25px;
    }

    @media screen and (max-width: 768px) {
          font-size: 23px;
          margin: 0px;
    }

    @media screen and (max-width: 300px) {
        h4{
            font-size: 24px;
        }
    }
`