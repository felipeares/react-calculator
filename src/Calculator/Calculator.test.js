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

  it("should have a lastKeyTypePressed state. First initialized with CE", () => {
    expect(wrapper.instance().state.lastKeyTypePressed).toEqual("CE");
  });

  it("should have a currentOperator state. First initialized empty string", () => {
    expect(wrapper.instance().state.currentOperator).toEqual("");
  });
});
