class OrganizationsController < ApplicationController
  before_action :authenticate_provider!
  before_action :provider_have_affiliation?, only: :show

  def show
    @organization = current_provider.organization
  end
  def new; end

  def create
    begin
      ActiveRecord::Base.transaction do
        @organization = Organization.new(organization_params)
        @organization.save!

        @organization.affiliations.create!(provider: current_provider, role: :admin)
      end

      flash[:success] = "組織情報を登録しました"
      redirect_to organization_path
    rescue => e
      flash[:alert] = "組織情報の登録に失敗しました #{e.message}"
      redirect_to new_organization_path
    end
  end

  private

  def organization_params
    params.permit(:organization_type, :name, :domain)
  end

  def provider_have_affiliation?
    unless current_provider.have_affiliation?
      redirect_to new_organization_path, alert: '組織を作成してください'
    end
  end
end
