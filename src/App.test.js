import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";
import Calculator from "./Calculator/Calculator";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("have not changed the UI", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should have a named App class", () => {
    expect(wrapper.find("div").hasClass("App")).toEqual(true);
  });

  it("should render the Calculator component", () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
});
