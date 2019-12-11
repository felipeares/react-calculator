import React from "react";
import { shallow } from "enzyme";
import Display from "./Display";

describe("Display", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Display />);
  });

  it("should render a main div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should have a Display", () => {
    expect(wrapper.find("div").hasClass("Display")).toEqual(true);
  });
});
