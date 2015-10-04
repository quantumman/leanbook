defmodule LeanBook.LayoutView do
  use LeanBook.Web, :view

  def page_title(conn, assigns) do
    render_existing view_module(conn), "page_title." <> view_template(conn), assigns
  end

  def scripts(conn, assigns) do
    raw(
        render_existing(view_module(conn), "scripts." <> view_template(conn), assigns)
        || default_scripts(conn)
    )
  end

  def default_scripts(conn) do
    ~s"""
    <script src="#{static_path(conn, "/js/app.js")}"></script>
    """
  end
end
