import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import HelpOutIcon from '@material-ui/icons/HelpOutline'
function Header() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search ..."/>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    Ralph
                </Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png" />
                </UserImage>
           </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div `
    background: #350d36;
    colo: white;
    display: flex;
    align-items: center;
    justify-content: space-betweenl;
`

const Main = styled.div `
    display: flex;
`

const SearchContainer = styled.div `
    min-width: 400px;
`

const Search = styled.div `
    box-shadow: inset 0 0 0 1px rgb(104, 74, 104)
    width: 100%;
    border-radius: 6px;

    input {
        background-color: transparent;
        border: none;
        padding-left: 8px;
        padding-right: 8px;
        color: white;
        padding-top: 4px;
        padding-bottom: 4px;
    }

    input:focused {
        outline: none;
    }
`
const UserContainer = styled.div `
    display: flex;
    align-itmes: center;
`
const Name = styled.div `

`
const UserImage = styled.div `

`
