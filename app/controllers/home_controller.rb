# frozen_string_literal: true

class HomeController < ApplicationController
  before_action :logged_in?
  def index; end

  private

  def logged_in?
    return unless provider_signed_in?

    redirect_to dashboards_path
  end
end
