import { useNavigate } from "react-router";
import styled from "styled-components";

export const Navbar = () => {
  const navigate = useNavigate();
  const onClickItem = (values) => {
    navigate(`/${values}`);
  };
  return (
    <NavbarBlock>
      <Menu>
        <MenuItem onClick={() => onClickItem("Pacient")}>Пациенты</MenuItem>
        <MenuItem onClick={() => onClickItem("addPacient")}>Добавить</MenuItem>
      </Menu>
    </NavbarBlock>
  );
};

const MenuItem = styled("li")`
  /* border: 1px solid red; */
  color: #9ca3af;
  margin-right: 20px;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 10px;
  transition: ease-in 0.2s;
  &:hover {
    background-color: #111827;
    color: #fff;
  }
`;
const Menu = styled("ul")`
  /* border: 1px solid red; */
  display: flex;
  justify-content: flex-start;
`;

const NavbarBlock = styled("div")`
  /* border: 1px solid red; */
  padding: 20px;
  background-color: #1f2937;
  display: flex;
  justify-content: flex-start;
`;
