import React, { useState } from "react";
import { Button, Container, Current, Previous, Screen } from "./Styled";

export default function Calculator() {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operation, setOperation] = useState("");

  const valueHandler = (e) => {
    const valueBtn = e.target.getAttribute("data");

    if (valueBtn === "." && current.includes(".")) return;
    setCurrent(current + valueBtn);
  };

  const DeleteHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };
  const ClearAllHandler = () => {
    setCurrent("");
    setPrevious("");
    setOperation("");
  };

  const operationHandler = (e) => {
    if (current === "") return;
    if (previous !== "") {
      let val = compute();
      setPrevious(val);
    } else {
      setPrevious(current);
    }

    setCurrent("");
    setOperation(e.target.getAttribute("data"));
  };

  const equalsHandler = () => {
    let val = compute();
    if (val === undefined || val === null) return;

    setCurrent(val);
    setOperation("");
    setOperation("");
  };

  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);

    if (isNaN(previousNumber) || isNaN(currentNumber)) return;

    switch (operation) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "×":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result
  };
  return (
    <Container>
      <Screen>
        <Previous>
          {previous} {operation}
        </Previous>
        <Current>{current}</Current>
      </Screen>
      <Button onClick={ClearAllHandler} gridSpan={2}>
        AC
      </Button>
      <Button onClick={DeleteHandler} control>
        DEL
      </Button>

      <Button onClick={operationHandler} data={"÷"} operation>
        ÷
      </Button>
      <Button data={"7"} onClick={valueHandler}>
        7
      </Button>
      <Button data={"8"} onClick={valueHandler}>
        8
      </Button>
      <Button data={"9"} onClick={valueHandler}>
        9
      </Button>
      <Button onClick={operationHandler} data={"×"} operation>
        ×
      </Button>
      <Button data={"4"} onClick={valueHandler}>
        4
      </Button>
      <Button data={"5"} onClick={valueHandler}>
        5
      </Button>
      <Button data={"6"} onClick={valueHandler}>
        6
      </Button>
      <Button onClick={operationHandler} data={"+"} operation>
        +
      </Button>
      <Button data={"1"} onClick={valueHandler}>
        1
      </Button>
      <Button data={"2"} onClick={valueHandler}>
        2
      </Button>
      <Button data={"3"} onClick={valueHandler}>
        3
      </Button>
      <Button onClick={operationHandler} data={"-"} operation>
        -
      </Button>
      <Button data={"."} period onClick={valueHandler}>
        .
      </Button>
      <Button data={"0"} onClick={valueHandler}>
        0
      </Button>
      <Button data={"="} onClick={equalsHandler} equals={2}>
        =
      </Button>
    </Container>
  );
}
