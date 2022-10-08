/* eslint-disable */
import styled from 'styled-components'


let FullNav = styled.div`
content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #a58e8e;
`;
let Contents = styled.div`
    position: relative;
    margin: 0 auto;
    width: 980px;
`;
let NavMenu = styled.ul`
    display: inline-flex;
`;
let NavList = styled.li`
    width: 137px;
    padding: 20px 0;
`;
let NavLetter = styled.h2`
    position: absolute;
    top: 7px;
`;
let NavLink = styled.a`
    font-weight: 500;
    font-size: 16px;
    color: #222;
    line-height: 1.500em;
`;
const navbar = () => {
    return(
        <>
        <FullNav>
            <Contents>
                <NavMenu>
                    <NavList>
                        <NavLetter>
                            <NavLink>영화</NavLink>
                        </NavLetter>
                    </NavList>
                </NavMenu>
            </Contents>

            <Contents>
                <NavMenu>
                    <NavList>
                        <NavLink>극장</NavLink>
                    </NavList>
                </NavMenu>
            </Contents>

            <Contents>
                <NavMenu>
                    <NavList>
                        <NavLink>예매</NavLink>
                    </NavList>
                </NavMenu>
            </Contents>

            <Contents>
                <NavMenu>
                    <NavList>
                        <NavLink>스토어</NavLink>
                    </NavList>
                </NavMenu>
            </Contents>

            <Contents>
                <NavMenu>
                    <NavList>
                        <NavLink>이벤트</NavLink>
                    </NavList>
                </NavMenu>
            </Contents>

            <Contents>
                <NavMenu>
                    <NavList>
                        <NavLink>혜택</NavLink>
                    </NavList>
                </NavMenu>
            </Contents>

        </FullNav>
        </>
    )
}

export default navbar;