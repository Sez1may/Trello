import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { AiOutlineEllipsis } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import styled from "styled-components";
import Cart from "../components/Cart";
import { addCard, archiveList, duplicateList, editList } from "../store/store";

const List = ({ list }) => {
  const dispatch = useDispatch();
  const [cardText, setCardText] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [newTitle, setNewTitle] = useState(list.title);

  const handleAddCard = () => {
    if (cardText.trim()) {
      dispatch(addCard({ listId: list.id, text: cardText }));
      setCardText("");
      setIsAdding(false);
    }
  };

  const handleTitleEdit = () => {
    if (newTitle.trim()) {
      dispatch(editList({ listId: list.id, title: newTitle }));
      setIsEditingTitle(false);
    }
  };

  return (
    <ListContainer>
      <Header>
        {isEditingTitle ? (
          <Input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={handleTitleEdit}
            autoFocus
          />
        ) : (
          <Title onClick={() => setIsEditingTitle(true)}>{list.title}</Title>
        )}
        <MenuButton onClick={() => setShowMenu(!showMenu)}>
          <AiOutlineEllipsis size={20} />
        </MenuButton>
        {showMenu && (
          <Menu>
            <MenuItem onClick={() => setIsEditingTitle(true)}>
              Изменить заголовок
            </MenuItem>
            <MenuItem
              onClick={() => dispatch(duplicateList({ listId: list.id }))}
            >
              Копировать список
            </MenuItem>
            <MenuItem
              onClick={() => dispatch(archiveList({ listId: list.id }))}
            >
              Архивировать список
            </MenuItem>
          </Menu>
        )}
      </Header>
      <CardList>
        {list.cards.map((card) => (
          <Cart key={card.id} card={card} />
        ))}
      </CardList>
      <AddCardWrapper>
        {isAdding ? (
          <AddCardContainer>
            <Input
              type="text"
              value={cardText}
              onChange={(e) => setCardText(e.target.value)}
              placeholder="Введите заголовок"
            />
            <Button onClick={handleAddCard}>Добавить</Button>
            <IconButton onClick={() => setIsAdding(false)}>
              <TiDelete size={20} />
            </IconButton>
          </AddCardContainer>
        ) : (
          <AddCardButton onClick={() => setIsAdding(true)}>
            <FaPlus /> Добавить карточку
          </AddCardButton>
        )}
      </AddCardWrapper>
    </ListContainer>
  );
};

export default List;
const ListContainer = styled.div`
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  min-width: 250px;
  max-width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #dfe1e6;
  padding-bottom: 4px;
  position: relative;
`;

const Title = styled.h2`
  cursor: pointer;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Menu = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  width: 200px;
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #2d2c2c;
    color: white;
  }
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  &:focus {
    border-color: #0079bf;
    outline: none;
  }
`;

const Button = styled.button`
  background: #172b4d;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #08275e;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const AddCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

const AddCardButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    color: #172b4d;
  }
`;
