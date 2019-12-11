import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";
import Display from "./Display/Display";

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
});
