defmodule LeanBook.PageController do
  use LeanBook.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
