import React from "react";
import { shallow } from "enzyme";
import PropTypes from "prop-types";
import KeyPad from "./KeyPad";

describe("KeyPad", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <KeyPad
        numberPressed={jest.fn()}
        dotPressed={jest.fn()}
        operatorPressed={jest.fn()}
        resetPressed={jest.fn()}
      />
    );
  });

  it("should render a main div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should have a KeyPad named class", () => {
    expect(
      wrapper
        .find("div")
        .first()
        .hasClass("KeyPad")
    ).toEqual(true);
  });

  it("should check for all prop types correctly setup", () => {
    expect(KeyPad.propTypes.numberPressed).toBe(PropTypes.func.isRequired);
    expect(KeyPad.propTypes.dotPressed).toBe(PropTypes.func.isRequired);
    expect(KeyPad.propTypes.operatorPressed).toBe(PropTypes.func.isRequired);
    expect(KeyPad.propTypes.resetPressed).toBe(PropTypes.func.isRequired);
  });
});
