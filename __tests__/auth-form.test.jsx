import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AuthForm from "@/components/auth-form";


jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

test("renders AuthForm component", () => {
  render(<AuthForm />);
  expect(screen.getByText("Auth Form")).toBeInTheDocument();
});