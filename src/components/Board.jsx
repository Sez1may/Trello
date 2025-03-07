import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import { addList } from "../store/store";
import List from "./List";

const Board = () => {
  const lists = useSelector((state) => state.board.lists);
  const dispatch = useDispatch();
  const [listTitle, setListTitle] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  const handleAddList = () => {
    if (listTitle.trim()) {
      dispatch(addList({ title: listTitle }));
      setListTitle("");
      setIsAdd(false);
    }
  };

  return (
    <Container>
      {lists.map((list) => (
        <List key={list.id} list={list} />
      ))}
      <AddListContainer>
        {isAdd ? (
          <>
            <Input
              type="text"
              value={listTitle}
              onChange={(e) => setListTitle(e.target.value)}
              placeholder="Введите название списка"
            />
            <Button onClick={handleAddList}>Добавить</Button>
          </>
        ) : (
          <AddButton onClick={() => setIsAdd(true)}>
            + Добавить колонку
          </AddButton>
        )}
      </AddListContainer>
    </Container>
  );
};

export default Board;

const Container = styled.div`
  display: flex;
  gap: 8px;
  padding: 14px;
  border-radius: 8px;
`;

const AddListContainer = styled.div`
  width: 300px;
  height: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
`;

const Button = styled.button`
  background: #a71508;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
`;

const AddButton = styled.button`
  height: fit-content;
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 20px;
`;
