import React, { useState } from "react";
import styled from "styled-components";

function TabMenu() {
  const [activeTab, setActiveTab] = useState("메뉴1");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <TabMenuContainer>
        <TabItem
          active={activeTab === "메뉴1"}
          onClick={() => handleTabClick("메뉴1")}
        >
          메뉴1
        </TabItem>
        <TabItem
          active={activeTab === "메뉴2"}
          onClick={() => handleTabClick("메뉴2")}
        >
          메뉴2
        </TabItem>
        <TabItem
          active={activeTab === "메뉴3"}
          onClick={() => handleTabClick("메뉴3")}
        >
          메뉴3
        </TabItem>
      </TabMenuContainer>
      <TabContent active={activeTab}>
        {activeTab === "메뉴1" && <div>메뉴1의 내용이 여기에 표시됩니다.</div>}
        {activeTab === "메뉴2" && <div>메뉴2의 내용이 여기에 표시됩니다.</div>}
        {activeTab === "메뉴3" && <div>메뉴3의 내용이 여기에 표시됩니다.</div>}
      </TabContent>
    </div>
  );
}

export default TabMenu;

// 탭 아이템 스타일 정의
const TabItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "skyblue" : "#f5f5f5")};
  display: inline-block;
  border-top: ${(props) => (props.active ? "1px solid skyblue" : "#")};
  border-left: ${(props) => (props.active ? "1px solid skyblue" : "#")};
  border-right: ${(props) => (props.active ? "1px solid skyblue" : "#")};
  border-bottom: ${(props) => (props.active ? "#" : "3px solid skyblue")};
  &:hover {
    background-color: skyblue;
  }
`;

// 탭 컨테이너 스타일 정의
const TabMenuContainer = styled.div`
  display: flex;
`;

// 탭 콘텐츠 스타일 정의
const TabContent = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;
