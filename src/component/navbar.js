/* eslint-disable */
import {useState,useEffect} from 'react';
import styled from 'styled-components';

import './css/navbar.css';

const navbar = () => {
    let [showNav, setShowNav] = useState('display_style_none');

    let showNavSwitch = (e) => {
        setShowNav(e);
        // console.log(e);
    }

    return(
        <>
            <div className='nav'>
                <div className='contents'>
                    <ul className='nav_menu'
                    onMouseEnter={() => showNavSwitch('display_style_block')}
                    onMouseLeave={() => showNavSwitch('display_style_none')}
                    >
                        <li>
                            <h2>영화</h2>
                            <dl className={'nav_overMenu ' +showNav }>
                                <dt>
                                    <h2>
                                        영화
                                    </h2>
                                </dt>
                                <dd>
                                    <h3>무비차트</h3>
                                </dd>
                                <dd>
                                    <h3>무비차트</h3>
                                </dd>
                                <dd>
                                    <h3>무비차트</h3>
                                </dd>
                            </dl>
                        </li>
                    
                        <li>
                            <h2>극장</h2>
                            <dl className={'nav_overMenu ' +showNav }>
                                <dt>
                                    <h2>
                                        극장
                                    </h2>
                                </dt>
                                <dd>
                                    <h3>CGV 극장</h3>
                                </dd>
                                <dd>
                                    <h3>특별관</h3>
                                </dd>
                            </dl>
                        </li>

                        <li>
                            <h2>예매</h2>
                            <dl className={'nav_overMenu ' +showNav }>
                                <dt>
                                    <h2>
                                        예매
                                    </h2>
                                </dt>
                                <dd>
                                    <h3>빠른예매</h3>
                                </dd>
                                <dd>
                                    <h3>상영스케쥴</h3>
                                </dd>
                                <dd>
                                    <h3>English Ticketing</h3>
                                </dd>
                                <dd>
                                    <h3>English Schedule</h3>
                                </dd>
                            </dl>
                        </li>

                        <li>
                            <h2>스토어</h2>
                            <dl className={'nav_overMenu ' +showNav }>
                                <dt>
                                    <h2>
                                        스토어
                                    </h2>
                                </dt>
                                <dd>
                                    <h3>영화관람권</h3>
                                </dd>
                                <dd>
                                    <h3>기프트카드</h3>
                                </dd>
                                <dd>
                                    <h3>콤보</h3>
                                </dd>
                                <dd>
                                    <h3>팝콘</h3>
                                </dd>
                                <dd>
                                    <h3>콤보</h3>
                                </dd>
                                <dd>
                                    <h3>음료</h3>
                                </dd>
                                <dd>
                                    <h3>스낵</h3>
                                </dd>
                                <dd>
                                    <h3>플레이존</h3>
                                </dd>
                                <dd>
                                    <h3>씨네샵</h3>
                                </dd>
                            </dl>
                        </li>

                        <li>
                            <h2>이벤트</h2>
                            <dl className={'nav_overMenu ' +showNav }>
                                <dt>
                                    <h2>
                                        이벤트
                                    </h2>
                                </dt>
                                <dd>
                                    <h3>SPECIAK</h3>
                                </dd>
                                <dd>
                                    <h3>영화/예매</h3>
                                </dd>
                                <dd>
                                    <h3>멤버십/CLUB</h3>
                                </dd>
                                <dd>
                                    <h3>CGV 극장별</h3>
                                </dd>
                                <dd>
                                    <h3>제휴할인</h3>
                                </dd>
                                <dd>
                                    <h3>당첨자 발표</h3>
                                </dd>
                                <dd>
                                    <h3>종료된 이벤트</h3>
                                </dd>
                            </dl>
                        </li>

                        <li>
                            <h2>혜택</h2>
                            <dl className={'nav_overMenu ' +showNav }>
                                <dt>
                                    <h2>
                                        혜택
                                    </h2>
                                </dt>
                                <dd>
                                    <h3>CGV 할인정보</h3>
                                </dd>
                                <dd>
                                    <h3>CLUB 서비스</h3>
                                </dd>
                                <dd>
                                    <h3>VIP 라운지</h3>
                                </dd>
                            </dl>
                        </li>
                    
                    </ul>

                    {/* <div class="totalSearch_wrap">
                        <input type="text" id="header_keyword" value="" placeholder="귀못" />
                    </div> */}


                </div>
            </div>
        </>
    );
}

export default navbar;