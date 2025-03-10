import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import List from "./List";
import { addList } from "../store/store";

const Board = () => {
  const lists = useSelector((state) => state.board.lists);
  const dispatch = useDispatch();
  const [listTitle, setListTitle] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddList = () => {
    if (listTitle.trim()) {
      dispatch(addList({ title: listTitle }));
      setListTitle("");
      setIsAdding(false);
    }
  };

  return (
    <BoardContainer>
      {lists.map((list) => (
        <List key={list.id} list={list} />
      ))}
      <AddListContainer>
        {!isAdding ? (
          <AddButton onClick={() => setIsAdding(true)}>
            + Добавить список
          </AddButton>
        ) : (
          <>
            <StyledInput
              type="text"
              value={listTitle}
              onChange={(e) => setListTitle(e.target.value)}
              placeholder="Название списка"
            />
            <ButtonRow>
              <PrimaryButton onClick={handleAddList}>Добавить</PrimaryButton>
              <CancelButton onClick={() => setIsAdding(false)}>
                Отмена
              </CancelButton>
            </ButtonRow>
          </>
        )}
      </AddListContainer>
    </BoardContainer>
  );
};

export default Board;

const BoardContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
`;

const AddListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledInput = styled.input`
  padding: 14px;
  border: 2px solid #dfe1e6;
  border-radius: 8px;
  font-size: 16px;
  transition: border 0.2s, box-shadow 0.2s;
  width: 250px;

  &:focus {
    border: 2px solid #0079bf;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 121, 191, 0.3);
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 8px;
`;

const AddButton = styled.button`
  width: 200px;
  height: 50px;
  background: #820e0e;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  transition: background 0.2s, transform 0.1s;
  &:active {
    transform: scale(0.98);
  }
`;

const PrimaryButton = styled(AddButton)`
  width: 160px;
  background: #5aac44;
  &:hover {
    background: #498336;
  }
`;

const CancelButton = styled.button`
  background: gray;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: color 0.2s;
  &:hover {
    color: #333;
  }
`;
