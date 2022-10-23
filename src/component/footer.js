/* eslint-disable */

import styled from 'styled-components'
import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom'

import './css/footer.css';


// styled-components
let Footer = styled.div`
    min-width: 1040px;
    padding: 0 0 14px;
    background-color: #f8f8f8;
`;
let Address = styled.p`
    font-style: normal;
    font-size: 12px;

`


const footer = () => {
    return(
        <>
            <Footer className='footer'>
                <ul className='policy_list'>
                    <li>
                        <a>회사소개</a>
                    </li>
                    <li>
                        <a>IR</a>
                    </li>
                    <li>
                        <a>채용정보</a>
                    </li>
                    <li>
                        <a>광고/제휴/출점문의</a>
                    </li>
                    <li>
                        <a>이용약관</a>
                    </li>
                    <li>
                        <a>편성기준</a>
                    </li>
                    <li>
                        <a>개인정보처리방침</a>
                    </li>
                    <li>
                        <a>법적고지</a>
                    </li>
                    <li>
                        <a>이메일주소무단수집거부</a>
                    </li>
                    <li>
                        <a>윤리경영</a>
                    </li>
                    <li>
                        <a>사이버감사실</a>
                    </li>
                </ul>
                
                <div className='company_info_wrap'>
                    <div className='company_info'>
                        <p>(04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한강로동)</p>
                        <p>대표이사:허민회 . 사업자등록번호: 104-81-45690 . 통신판매업신고번호: 2017-서울용산-0662 사업자정보확인</p>
                        <p>호스팅사업자: CJ올리브네트웍스 . 개인정보보호 책임자: 심준범 . 대표이메일: cjcgvmaster@cj.net</p>
                        <p>© CJ CGV. All Rights Reserved</p>

                    </div>
                    <div className='familysite_wrap'></div>
                </div>


            </Footer>
        </>
    )
}

  
export default footer;