import styled from "styled-components";
import ReactDOM from "react-dom";
export const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div>
      <Backdrop onClick={onClose}>
        <StyledModal onClick={(e) => e.stopPropagation()}>
          {children}
        </StyledModal>
      </Backdrop>
    </div>,
    document.getElementById("modal")
  );
};
const StyledModal = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  width: 500px;
  height: 200px;
  border: 2px solid #1a4468;
  position: absolute;
`;
const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #808080a7;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
