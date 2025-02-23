import { mount, unmount } from "svelte";
import { expect, test } from "vitest";
import AppHero from "./AppHero.svelte";

test("AppHero", () => {
  const component = mount(AppHero, {
    target: document.body,
  });

  expect(document.body.innerHTML).toContain("Event Planner");

  unmount(component);
});
