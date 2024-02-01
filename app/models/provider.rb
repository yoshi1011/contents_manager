class Provider < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable, :lockable, :trackable

  has_one :affiliation, dependent: :destroy
  has_one :organization, through: :affiliation

  def have_affiliation?
    affiliation.present?
  end
end
