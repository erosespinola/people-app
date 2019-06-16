import React from "react";
import { mount } from "enzyme";
import PeopleItem from "../PeopleItem";

const mockFn = jest.fn();
describe("PeopleItem component", () => {
  const component = mount(
    <PeopleItem
      person={{
        email: "eros@email.com",
        name: "Eros",
        title: "Software Engineer"
      }}
      onCharCount={mockFn}
      onDuplicate={mockFn}
    />
  );

  it("renders without crashing", () => {
    expect(component.length).toBe(1);
  });

  it("renders right name and email", () => {
    const text = component.find("span.MuiListItemText-primary").text();
    expect(text).toBe("Eros (eros@email.com)");
  });

  it("renders right title", () => {
    const text = component.find("p.MuiListItemText-secondary").text();
    expect(text).toBe("Software Engineer");
  });

  it("renders actions", () => {
    expect(component.find("button").length).toBe(2);
  });
});
