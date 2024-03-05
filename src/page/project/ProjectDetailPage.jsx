import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ProjectBox from '../../components/box/ProjectBox';

import Dashboard from '../../img/project/admin/Dashboard.png';
import MemberList from '../../img/project/admin/MemberList.png';
import Insert from '../../img/project/admin/Insert.png';
import ActivityList from '../../img/project/admin/ActivityList.png';
import InquiryList from '../../img/project/admin/InquiryList.png';

import Main from '../../img/project/portfolio/Main.png';
import AboutMe from '../../img/project/portfolio/AboutMe.png';
import Skill from '../../img/project/portfolio/Skill.png';
import Project from '../../img/project/portfolio/Project.png';
import Contact from '../../img/project/portfolio/Contact.png';

export default function ProjectAdminPage() {
  const { num  }  = useParams();
  const number = parseInt(num , 10);
  const [ type, setType] = useState([]);


  const admin = [
    {num : 1, header : '농촌빛길 - 관리자 페이지', text: '2023.8  ~  2023.11',imgSrc:Dashboard ,title : 'Dash Board', content : '관리자가 확인 해야할 부분을 메인에 한번에 볼 수 있도록 디자인함.데이터가 있는 날짜만 보이지 않고 모든 날짜로 반환하였음.' },
    {title : '회원조회', content : 'ROWNUM 페이징처리', imgSrc:MemberList },
    {title : '회원 등록/수정/삭제', content : 'ResponseDTO로 반환하여 진행상태 표기함', imgSrc:Insert },
    {title : '전체체험조회', content : '공통검색 DTO사용해서 RequestBody이용하여 코드 간단화, UNION 연산자로 다중검색 쿼리 구현 ', imgSrc:ActivityList },
    {title : '문의조회', content : '한 테이블에 Q/A로 답변 작성시 A에 답변이 등록 되도록 함', imgSrc:InquiryList },
  ];
  const portfolio = [
    {num : 2, header : '포트폴리오', text: '2024.2 ~ ', imgSrc: Main ,title : '', content : '' },
    {title : '', content : '', imgSrc: AboutMe},
    {title : '', content : '', imgSrc: Skill},
    {title : '', content : '', imgSrc: Project},
    {title : '', content : '', imgSrc: Contact},
  ];

  useEffect(() => {
      switch(number) {
    case 1 : setType(admin); break;
    case 2 : setType(portfolio); break;
    default: setType([]);
    }
  },[number]);

  const selectItems = (selectType) => {
    return selectType.map((item, index) => (
      <div key={index}>
          <p>{item.header}</p>
          <p>{item.text}</p>
          <img src={item.imgSrc} alt='' width='480rem'/>
          <p>{item.title}</p>
          <p>{item.content}</p>
        </div>
    ));
  };

  
  return (
    <ProjectBox>
      {selectItems(type) }
    </ProjectBox>
  )
}
