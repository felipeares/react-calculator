import React from "react";
import { shallow } from "enzyme";
import Aux from "./Aux";

describe("HOC Aux", () => {
  it("should return the inputs children", () => {
    // create a simple component
    const AnyComponent = () => <div>should render this</div>;

    // get the new component passed by Aux
    const AuxedComponent = () => (
      <Aux>
        <AnyComponent />
      </Aux>
    );

    // generate a shallow wrapper of the component with Aux
    const wrapper = shallow(<AuxedComponent />);

    // expect to render the childrens
    expect(wrapper.html()).toEqual("<div>should render this</div>");
  });
});
