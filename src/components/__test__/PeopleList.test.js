import React from "react";
import { shallow } from "enzyme";
import PeopleList from "../PeopleList";

const mockFn = jest.fn();
describe("PeopleList component", () => {
  const component = shallow(
    <PeopleList
      people={[
        {
          email: "eros@email.com",
          name: "Eros",
          title: "Software Engineer"
        }
      ]}
      onCharCount={mockFn}
      onDuplicate={mockFn}
    />
  );

  it("renders without crashing", () => {
    expect(component.length).toBe(1);
  });

  it("renders right numbers of people", () => {
    expect(component.find("PeopleItem").length).toBe(1);
  });

  it("gets right props for PeopleItem", () => {
    expect(component.find("PeopleItem").props().person).toEqual({
      email: "eros@email.com",
      name: "Eros",
      title: "Software Engineer"
    });
  });
});
