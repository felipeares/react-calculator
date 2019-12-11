import React from "react";
import { shallow } from "enzyme";
import KeyPad from "./KeyPad";

describe("KeyPad", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<KeyPad />);
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
});
