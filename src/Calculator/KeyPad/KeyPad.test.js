import React from "react";
import { shallow } from "enzyme";
import PropTypes from "prop-types";
import KeyPad from "./KeyPad";
import Key from "../Key/Key";

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

  it("have not changed the UI", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render 4 <div />'s", () => {
    expect(wrapper.find("div").length).toEqual(4);
  });

  it("should have a KeyPad named class on the first div", () => {
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

  it("should render 12 <Key /> in the numbers container", () => {
    expect(wrapper.find(".NumbersContainer").find(Key).length).toEqual(12);
  });

  it("should render 4 <Key /> in the operators container", () => {
    expect(wrapper.find(".OperatorsContainer").find(Key).length).toEqual(4);
  });

  it("should render a Key within a SubmitContainer", () => {
    expect(wrapper.find(".SubmitContainer").find(Key).length).toEqual(1);
  });
});
