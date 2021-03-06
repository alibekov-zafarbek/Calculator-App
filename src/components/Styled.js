import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin: 30px auto;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
  /* box-shadow: 2px 2px 10px #333; */
`;

export const Screen = styled.div`
  grid-column: 1 / -1;
  background-color: rgba(60, 64, 67, 0.75);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  height: 100%;
  border-top-left-radius: 1px;
  border-top-right-radius: 10px;
`;

export const Previous = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
`;

export const Current = styled.div`
  color: #fff;
  font-size: 2.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: 1px outset #fff;
  height: 100%;
  outline: none;
  background-color: rgba(255, 255, 255, 0.75);
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  /* ${function ({ gridSpan }) {
    if (gridSpan) {
      return `grid-column: span ${gridSpan}`;
    }
  }} */
  ${({ gridSpan }) => gridSpan && `grid-column: span ${gridSpan}`}
  ${({ operation }) => operation && `background-color: #555`}
 ${({ control }) => control && `background-color: skyblue`}
 ${({ equals }) =>
    equals && `grid-column: span ${equals} ;border-bottom-right-radius:10px; background-color: #555`}
 ${({ period }) => period && `border-bottom-left-radius: 20px; background-color: skyblue`}
`;
