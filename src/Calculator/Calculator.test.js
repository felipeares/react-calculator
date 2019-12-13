import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";
import Display from "./Display/Display";
import KeyPad from "./KeyPad/KeyPad";

describe("Calculator", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  });

  it("have not changed the UI", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a main div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should have a main class named Calculator", () => {
    expect(
      wrapper
        .find("div")
        .first()
        .hasClass("Calculator")
    ).toEqual(true);
  });

  it("should have a state with a string as displayValue", () => {
    expect(wrapper.instance().state.displayValue).toEqual("");
  });

  it("should have a <Display /> with displayValue related to the displayValue state", () => {
    expect(
      wrapper.containsMatchingElement(
        <Display displayValue={wrapper.instance().state.displayValue} />
      )
    ).toEqual(true);
  });

  it("should have a <KeyPad /> with all key pressed handlers", () => {
    expect(
      wrapper.containsMatchingElement(
        <KeyPad
          numberPressed={wrapper.instance().numberPressedHandler}
          dotPressed={wrapper.instance().dotPressedHandler}
          operatorPressed={wrapper.instance().operatorPressedHandler}
          resetPressed={wrapper.instance().resetPressedHandler}
        />
      )
    ).toEqual(true);
  });

  it("should have a firstNumber state", () => {
    expect(wrapper.instance().state.firstNumber).toEqual("");
  });

  it("should have a firstOperator state", () => {
    expect(wrapper.instance().state.firstOperator).toEqual("");
  });

  it("should have a secondNumber state", () => {
    expect(wrapper.instance().state.secondNumber).toEqual("");
  });
});

describe("Calculator Operations", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  });

  it("should calculate basic operations", () => {
    const operations = [
      {
        keys: ["3", "4", "+", "1", "2", "4", "6", "="],
        res: "1280"
      },
      {
        keys: ["1", "2", "-", "6", "="],
        res: "6"
      },
      {
        keys: ["1", "2", "-", "16", "="],
        res: "-4"
      },
      {
        keys: ["1", "2", "*", "12", "="],
        res: "144"
      },
      {
        keys: ["2", "8", "/", "7", "="],
        res: "4"
      }
    ];

    operations.forEach(op => {
      op.keys.forEach(key => {
        if (isNaN(key) && key !== ".") {
          wrapper.instance().operatorPressedHandler(key);
        } else {
          wrapper.instance().numberPressedHandler(key);
        }
      });
      expect(wrapper.instance().state.displayValue).toEqual(op.res);
      wrapper.instance().resetPressedHandler();
    });
  });
});
