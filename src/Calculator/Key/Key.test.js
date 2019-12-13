import React from "react";
import { shallow } from "enzyme";
import PropTypes from "prop-types";
import Key from "./Key";

describe("Key", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Key value={""} clicked={jest.fn()} />);
  });

  it("should render a main button", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("should have a class of Key", () => {
    expect(
      wrapper
        .find("button")
        .first()
        .hasClass("Key")
    ).toEqual(true);
  });

  it("should check for all prop types correctly setup", () => {
    expect(Key.propTypes.value).toBe(PropTypes.string.isRequired);
    expect(Key.propTypes.clicked).toBe(PropTypes.func.isRequired);
  });
});
