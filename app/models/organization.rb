class Organization < ApplicationRecord
  # typeで命名するとSTIの利用を想定してしまうため冗長だがorganization_typeとしている
  enum organization_type: { individual: 0, corporation: 1 }

  has_many :affiliations, dependent: :destroy
  has_many :providers, through: :affiliations, dependent: :destroy

  validates :domain, uniqueness: true
end
