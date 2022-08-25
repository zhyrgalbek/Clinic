import PacientCard from "../components/PacientCard";
import styled from "styled-components";
const arr = [
  {
    name: "Hello ",
    address: "world",
  },
  {
    name: "Hello ",
    address: "world",
  },
  {
    name: "Hello ",
    address: "world",
  },
  {
    name: "Hello ",
    address: "world",
  },
  {
    name: "Hello ",
    address: "world",
  },
  {
    name: "Hello ",
    address: "world",
  },
  {
    name: "Hello ",
    address: "world",
  },
  {
    name: "Hello ",
    address: "world",
  },
];
export default function AdminLayout() {
  return (
    <AdminBlock>
      {arr.map((elem) => {
        return <PacientCard name={elem.name} address={elem.address} />;
      })}
    </AdminBlock>
  );
}

const AdminBlock = styled("div")`
  /* border: 1px solid red; */
  margin: 0 50px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
