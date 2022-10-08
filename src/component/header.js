/* eslint-disable */

import Navbar from './navbar';

import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock,faUserPlus,faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons'

// styled-components
let Header = styled.div`
    position: relative;
    z-index: 101;
`;
let HeaderContent = styled.div`
    margin-bottom: 50px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
`;
let Contents  = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 6px 25px 5px;
    background-color: #fff;
    width: 980px;
    margin: 0 auto;
`;
let Logo  = styled.h1`
    display: inline-flex;
    align-items: flex-end;
    height: 53px;
`;
let Link  = styled.a`
    display: block;
    float: left;
    height: 100%;
`;
let LogoImg = styled.img`
    display: block;
    width: auto;
    height: 100%;
    object-fit: contain;
    vertical-align: middle;
`
let Letter  = styled.div`
    font-weight: 300;
    font-size: 16px;
    color: #222;
    letter-spacing: 0.313em;
    line-height: 1.500em;
`;
let Icons  = styled.ul`
    display: flex;
    align-items: center;
`;
let IconsList  = styled.li`
    margin-left: 44px;
    margin-top: 2px;
`;
let IconsLink  = styled.a`
    display: block;
    position: relative;
    padding-bottom: 19px;
`;
let IconsLetter  = styled.span`
    position: absolute;
    bottom: 0;
    left: 50%;
    font-size: 13px;
    color: #666;
    line-height: 1.462em;
    white-space: nowrap;
    transform: translate(-50%, 0);
`;
/**
 * Header
 * @returns header comp
 * @author 민지
 */

const header = () => {
    return(
        <>
        <Header>
            <HeaderContent>
                <Contents>
                    <Logo>
                        <Link>
                            <LogoImg src='/logoRed.png'></LogoImg>
                        </Link>
                        <Letter>CULTUREPLEX</Letter>
                    </Logo>
                    

                    <Icons>
                        <IconsList>
                            <IconsLink>
                                <FontAwesomeIcon className="width_40 height_40" icon={faLock} />
                                <IconsLetter>로그인</IconsLetter>
                            </IconsLink>
                        </IconsList>
                        <IconsList>
                            <IconsLink>
                                <FontAwesomeIcon className="width_40 height_40" icon={faUserPlus} />
                                <IconsLetter>회원가입</IconsLetter>
                            </IconsLink>
                        </IconsList>
                        <IconsList>
                            <IconsLink>
                                <FontAwesomeIcon className="width_40 height_40" icon={faUser} />
                                <IconsLetter>MY WAH</IconsLetter>
                            </IconsLink>
                        </IconsList>
                        <IconsList>
                            <IconsLink>
                                <FontAwesomeIcon className="width_40 height_40" icon={faHeadphones} />
                                <IconsLetter>고객센터</IconsLetter>
                            </IconsLink>
                        </IconsList>
                    </Icons>
                </Contents>
                

            </HeaderContent>
            <Navbar></Navbar>
        
        </Header>
        </>
    );
}

export default header;