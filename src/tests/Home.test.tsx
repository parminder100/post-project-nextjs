import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";


const mockPosts = [
  { id: 1, title: "React Testing", body: "Learn how to test React apps." },
  { id: 2, title: "Next.js Guide", body: "A guide to Next.js development." },
  { id: 3, title: "Unit Testing", body: "Write better tests for React." },
];

describe("Home Component (Search Functionality)", () => {
  it("renders the search input", () => {
    render(<Home posts={mockPosts} />);
    expect(screen.getByPlaceholderText(/Search posts/i)).toBeInTheDocument();
  });

  it("filters posts based on search input", async () => {
    render(<Home posts={mockPosts} />);

    const searchInput = screen.getByPlaceholderText(/Search posts/i);
    fireEvent.change(searchInput, { target: { value: "React" } });


    expect(await screen.findByText("React Testing")).toBeInTheDocument();
    expect(screen.queryByText("Next.js Guide")).not.toBeInTheDocument();
    expect(screen.queryByText("Unit Testing")).not.toBeInTheDocument();
  });
});
