defmodule LeanBook.ArticleView do
  use LeanBook.Web, :view

  def render("page_title.show.html", assigns), do: assigns[:article].title
end
