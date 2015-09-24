defmodule LeanBook.LayoutView do
  use LeanBook.Web, :view

  def page_title(conn, assigns) do
    render_existing view_module(conn), "page_title." <> view_template(conn), assigns
  end
end
