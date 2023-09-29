import { render, screen } from '@testing-library/react';
import LoginForm, { validateEmail, validatePassword} from '.';

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

test("empty email is invalid", () => {
  expect(validateEmail("")).toBeFalsy();
});

test("text in email", ()=> {
  expect(validateEmail("abcdefg")).toBeFalsy();
});

test("valid email", () => {
  expect(validateEmail("test@example.com")).toBeTruthy();
});

test("special characters email", () => {
  expect(validateEmail("test>@cool@com")).toBeFalsy();
});

test("empty password", () => {
  expect(validatePassword("")).toBeFalsy();
});

test("short password", () => {
  expect(validatePassword("1234")).toBeFalsy();
});

test("lowercase password", () => {
  expect(validatePassword("abcdefgh")).toBeFalsy();
});

test("lower and uppercase password", () => {
  expect(validatePassword("ABCdefgh")).toBeFalsy();
});

test("lower, upper and digit password", () => {
  expect(validatePassword("ABCdefg8")).toBeFalsy();
});

test("valid password", () => {
  expect(validatePassword("aBD7__45j")).toBeTruthy();
});