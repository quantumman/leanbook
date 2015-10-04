defmodule RubyServer.AsciiDoctor do
  def convert(input) do
    RubyServer.call(
      ~s"""
      require('asciidoctor')
      html = Asciidoctor.convert source, header_footer: true,  safe: 'safe'
      html || ""
      """,
      ~s"""
      :toc: right

      #{input}
      """
    )
    |> Floki.find("body")
    |> to_html
  end

  defp to_html(node) do
    case node do
      []                           -> ""
      text when is_bitstring(text) -> text
      [h|t]                        -> to_html(h) <> to_html(t)
      {"body", attrs, children}    -> to_html({"main", enforce_toc_right(attrs), children})
      {elem, attrs, children}      ->
        "<#{elem}#{to_attr attrs}>#{to_html children}</#{elem}>"
    end
  end
  defp enforce_toc_right(attrs) do
    Enum.map(
      attrs,
      fn {key, value} -> {key, String.replace(value, "toc-left", "toc-right")} end
    )
  end
  defp to_attr(attrs) do
    List.foldl(
      attrs,
      "",
      fn ({key, value}, acc) -> acc <> " #{key}='#{value}'" end
    )
  end
end
