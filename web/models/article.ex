defmodule LeanBook.Article do
  use LeanBook.Web, :model

  alias RubyServer.AsciiDoctor

  schema "articles" do
    field :title, :string
    field :content, :string
    field :source, :string

    timestamps
  end

  @required_fields ~w(source title)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end

  before_insert :convert
  before_update :convert
  def convert(changeset) do
    content =
      changeset
      |> Ecto.Changeset.get_change(:source)
      |> AsciiDoctor.convert

    changeset
    |> Ecto.Changeset.put_change(:content, content)
  end
end
