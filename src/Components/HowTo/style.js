import styled from "styled-components";

export const instructions = styled.div`
  display: block;
  align-items: left;
  text-align: left;
  font-family: "Open Sans";
  font-size: 13px;
`;

export const content = styled.div`
  color: #ffffff;
  padding: 0 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

export const examples = styled.div`
  display: block;
  align-items: left;
  text-align: left;
  font-family: "Open Sans";
  font-size: 14px;
`;

export const square = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2px;
  background-color: #121213;
  color: white;
  height: 40px;
  width: 40px;

  border-color: #3a3a3c;
  border-radius: 1px;
  border-width: 2px;
  border-style: solid;

  font-size: 20px;
`;

export const row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

export const correct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2px;
  background-color: #6aaa64;
  color: white;
  height: 40px;
  width: 40px;

  border-color: #6aaa64;
  border-radius: 1px;
  border-width: 2px;
  border-style: solid;

  font-size: 20px;
`;

export const incorrect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2px;
  background-color: #c9b458;
  color: white;
  height: 40px;
  width: 40px;

  border-color: #c9b458;
  border-radius: 1px;
  border-width: 2px;
  border-style: solid;

  font-size: 20px;
`;

export const wrong = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2px;
  background-color: #3a3a3c;
  color: white;
  height: 40px;
  width: 40px;

  border-color: #3a3a3c;
  border-radius: 1px;
  border-width: 2px;
  border-style: solid;

  font-size: 20px;
`;
