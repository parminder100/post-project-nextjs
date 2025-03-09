import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../components/Card";


jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => children,
}));

describe("Card Component", () => {
  const mockPost = {
    id: 1,
    title: "Test Post",
    body: "This is a test post body",
  };

  it("renders the post title and body", () => {
    render(<Card post={mockPost} />);

    expect(screen.getByText("Test Post")).toBeInTheDocument();
    expect(screen.getByText(/This is a test post body/i)).toBeInTheDocument();
  });

  it("has a Read More link pointing to the correct URL", () => {
    render(<Card post={mockPost} />);

    const readMoreLink = screen.getByRole("link", { name: /read more/i });
    expect(readMoreLink).toHaveAttribute("href", "/posts/1");
  });
});
