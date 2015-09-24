use Mix.Config

config :leanBook, LeanBook.Endpoint,
  http: [port: {:system, "PORT"}],
  url: [shceme: "http", host: "secret-shore-4412.herokuapp.com", port: 80],
  force_ssl: [rewrite_on: [:x_forwarded_proto]],
  cache_static_manifest: "priv/static/manifest.json"

config :logger, level: :info

config :leanBook, LeanBook.Endpoint,
  secret_key_base: System.get_env("SECRET_KEY_BASE")

# Finally import the config/prod.secret.exs
# which should be versioned separately.
import_config "prod.secret.exs"
