import { mount } from "@vue/test-utils";
import Todo from "@/components/ToDo.vue";

test("renders a todo", () => {
  const wrapper = mount(Todo);

  const todo = wrapper.get('[data-test="todo"]');

  expect(todo.text()).toContain("Learn Vue.js 3");
});

test("creates a todo", async () => {
  const wrapper = mount(Todo);
  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);

  await wrapper.get('[data-test="new-todo"]').setValue("New todo");
  await wrapper.get('[data-test="form"]').trigger("submit");

  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
});

test("completes a todo", async () => {
  const wrapper = mount(Todo);

  await wrapper.get('[data-test="todo-checkbox"]').setValue(true);

  expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed");
});

test("deletes a todo", async () => {
  const wrapper = mount(Todo);
  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);

  await wrapper.get('[data-test="todo-remove"]').trigger("click");

  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(0);
});
