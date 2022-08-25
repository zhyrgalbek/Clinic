import styled from "styled-components";
export default function PacientCard({ name, address }) {
  return (
    <PaciendBlock>
      <PacientImage></PacientImage>
      <PacientInfo>
        <PacientName>{name}</PacientName>
        <PacientAddress>{address}</PacientAddress>
      </PacientInfo>
    </PaciendBlock>
  );
}

const PacientAddress = styled("p")`
  font-size: 16px;
  padding-bottom: 15px;
`;

const PacientName = styled("h3")`
  margin: 0;
  text-align: center;
  padding: 10px 0;
  font-weight: bolder;
`;

const PacientInfo = styled("div")`
  /* border: 1px solid blue; */
  padding: 0 20px;
  /* background-color: blue; */
`;

const PacientImage = styled("div")`
  /* border: 1px solid green; */
  height: 150px;
  background-color: #a8e1bf;
  border-radius: 20px;
`;

const PaciendBlock = styled("div")`
  /* border: 1px solid red; */
  margin: 30px auto;
  width: 250px;
  padding: 10px 20px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #cdcbce;
`;
