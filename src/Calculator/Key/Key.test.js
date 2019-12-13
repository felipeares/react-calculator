import React from "react";
import { shallow } from "enzyme";
import PropTypes from "prop-types";
import Key from "./Key";

describe("Key", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Key value={""} clicked={jest.fn()} keyType={""} />);
  });

  it("should render main div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should have a class of Key", () => {
    expect(
      wrapper
        .find("div")
        .first()
        .hasClass("Key")
    ).toEqual(true);
  });

  it("should check for all prop types correctly setup", () => {
    expect(Key.propTypes.value).toBe(PropTypes.string.isRequired);
    expect(Key.propTypes.clicked).toBe(PropTypes.func.isRequired);
    expect(Key.propTypes.keyType).toBe(PropTypes.string.isRequired);
  });

  it("should render as text the value props", () => {
    wrapper.setProps({ value: "test" });
    expect(wrapper.text()).toEqual("test");
  });
});
