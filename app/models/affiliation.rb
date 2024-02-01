# 組織への配信者の所属情報を管理するモデル
class Affiliation < ApplicationRecord
  enum role: { member: 0, admin: 1, manager: 2 }

  belongs_to :provider
  belongs_to :organization
end
