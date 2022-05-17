import { render, screen } from "@testing-library/react";
import { PostCard } from ".";

describe("<PostCard />", () => {
  const post = {
    title: "title 1",
    body: "body 1",
    id: 1,
    cover: "img/img.png",
  };

  it("should render correctly", () => {
    render(<PostCard post={post} />);

    expect(screen.getByRole("img", { name: /title 1/i })).toHaveAttribute(
      "src",
      "img/img.png"
    );
    expect(
      screen.getByRole("heading", { name: /title 1/i })
    ).toBeInTheDocument();
    expect(screen.getByText("body 1")).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard post={post} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
