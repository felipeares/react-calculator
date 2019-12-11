import React from "react";
import { shallow } from "enzyme";
import Display from "./Display";
import PropTypes from "prop-types";

describe("Display", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Display displayValue={""} />);
  });

  it("have not changed the UI", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a main div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should have a Display", () => {
    expect(wrapper.find("div").hasClass("Display")).toEqual(true);
  });

  it("renders the value of displayValue", () => {
    wrapper.setProps({ displayValue: "test" });
    expect(wrapper.text()).toEqual("test");
  });

  it("should check for displayValue prop to be string", () => {
    const prop_type_is_string = Display.propTypes.displayValue;
    expect(prop_type_is_string).toBe(PropTypes.string.isRequired);
  });
});
