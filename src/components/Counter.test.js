import { shallow } from "enzyme";
import Counter from "./Counter";

const wrapper = shallow(<Counter />);

describe("Counter tests", () => {
  it("should render initial value 0 without props", () => {
    const number = wrapper.find("#counter");

    expect(number.text()).toBe("0");
  });

  it("should render initial value 10 from props", () => {
    const wrapperNew = shallow(<Counter start={10} />);
    const number = wrapperNew.find("#counter");

    expect(number.text()).toBe("10");
  });

  it("should render + and - buttons", () => {
    const incrementButton = wrapper.find("#add");
    const decrementButton = wrapper.find("#subtract");

    expect(incrementButton.exists()).toBe(true);
    expect(decrementButton.exists()).toBe(true);
  });

  it("should increment counter", () => {
    let number = wrapper.find("#counter");
    const incrementButton = wrapper.find("#add");
    incrementButton.simulate("click");
    number = wrapper.find("#counter");

    expect(number.text()).toBe("1");
  });

  it("should increment counter with initial value 10 from props", () => {
    const wrapperNew = shallow(<Counter start={10} />);
    let number = wrapperNew.find("#counter");
    const incrementButton = wrapperNew.find("#add");
    incrementButton.simulate("click");
    number = wrapperNew.find("#counter");

    expect(number.text()).toBe("11");
  });

  it("should input change counter value", () => {
    const input = wrapper.find("input");
    let number = wrapper.find("#counter");
    const changeCounter = wrapper.find("#change");
    input.at(0).simulate("change", { target: { name: "value", value: 50 } });
    changeCounter.simulate("click");
    number = wrapper.find("#counter");

    expect(number.text()).toBe("50");
  });

  it("should reset", () => {
    let number = wrapper.find("#counter");
    const resetButton = wrapper.find("#reset");
    resetButton.simulate("click");
    number = wrapper.find("#counter");

    expect(number.text()).toBe("0");
  });
});
