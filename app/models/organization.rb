class Organization < ApplicationRecord
  has_many :affiliations, dependent: :destroy
  has_many :providers, through: :affiliations, dependent: :destroy
end
