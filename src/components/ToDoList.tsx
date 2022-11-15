import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, toDOSelector } from "../atoms";
import CategoryList from "./CategoryList";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDO";
import ToDo from "./ToDo";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px 20px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 35px;
  min-height: 500px;
`;
const Head = styled.div`
  font-family: "Times New Roman", Times, serif;
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Hr = styled.hr`
  border: 3px dashed;
`;

const SelectCategory = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDOSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  return (
    <Wrapper>
      <Boards>
        <Board>
          <SelectCategory>
            <CreateCategory />
          </SelectCategory>
          <Head>오늘의 할 일</Head>
          <Hr />

          <CategoryList />
          <CreateToDo />

          {toDos?.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </Board>
      </Boards>
    </Wrapper>
  );
}

export default ToDoList;
