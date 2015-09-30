defmodule LeanBook.ArticleTest do
  use LeanBook.ModelCase

  alias LeanBook.Article

  @valid_attrs %{content: "some content", source: "some content", title: "some content", toc: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Article.changeset(%Article{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Article.changeset(%Article{}, @invalid_attrs)
    refute changeset.valid?
  end
end
