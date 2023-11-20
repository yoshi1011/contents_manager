source "https://rubygems.org"

ruby "3.2.2"

gem "rails", "~> 7.1.1"
gem "sprockets-rails"
gem "pg", "~> 1.1"
gem "puma", ">= 5.0"
gem "jsbundling-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "jbuilder"
gem "tzinfo-data", platforms: %i[ windows jruby ]
gem "bootsnap", require: false

group :development, :test do
  gem "debug", platforms: %i[ mri windows ]
  gem "rspec-rails", "~> 6.0.0"
  gem "factory_bot_rails","~> 6.2.0"
  gem "vite_rails"
end

group :development do
  gem "web-console"
  gem "annotate"
  gem 'rubocop-rails', "~> 2.20.0", require: false
  gem "steep", "~> 1.5"
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
end
