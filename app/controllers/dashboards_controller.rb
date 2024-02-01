class DashboardsController < ApplicationController
  before_action :authenticate_provider!
  before_action :provider_have_affiliation?

  def index; end

  private

  def provider_have_affiliation?
    unless current_provider.have_affiliation?
      redirect_to new_organization_path, alert: '組織を作成してください'
    end
  end
end
