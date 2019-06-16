import React from "react";
import { shallow } from "enzyme";
import PeopleDialog from "../PeopleDialog";

describe("PeopleDialog component", () => {
  const component = shallow(
    <PeopleDialog
      email="eros@mail.com"
      onClose={jest.fn()}
      data={[
        { key: "m", count: 2 },
        { key: "o", count: 2 },
        { key: "e", count: 1 },
        { key: "s", count: 1 },
        { key: "@", count: 1 },
        { key: "r", count: 1 },
        { key: "a", count: 1 },
        { key: "i", count: 1 },
        { key: "l", count: 1 },
        { key: ".", count: 1 },
        { key: "c", count: 1 }
      ]}
      open
    />
  );

  it("renders without crashing", () => {
    expect(component.length).toBe(1);
  });

  it("renders dialog title", () => {
    expect(component.find("#dialog-title").exists()).toBe(true);
  });

  it("renders dialog content", () => {
    expect(component.find("#dialog-content").exists()).toBe(true);
  });

  it("renders dialog actions", () => {
    expect(component.find("#dialog-actions").exists()).toBe(true);
  });
});
