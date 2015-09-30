defmodule LeanBook.Repo.Migrations.CreateArticle do
  use Ecto.Migration

  def change do
    create table(:articles) do
      add :title, :string, size: 255
      add :content, :text
      add :source, :text

      timestamps
    end

  end
end
