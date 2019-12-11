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

  it("should have a <Display />", () => {
    expect(wrapper.find(Display)).toHaveLength(1);
  });
});
