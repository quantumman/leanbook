defmodule LeanBook.ArticleView do
  use LeanBook.Web, :view

  def render("page_title.show.html", assigns), do: assigns[:article].title

  def render("scripts.show.html", %{:conn => conn} = assigns), do: ~s"""
  <script src="#{static_path(conn, "/js/reader.js")}"></script>
  """
  def render("scripts.new.html", %{:conn => conn} = assigns), do: ~s"""
  <script src="#{static_path(conn, "/js/editor.js")}"></script>
  """
end
