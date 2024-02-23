# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :set_logged_in_status

  def set_logged_in_status
    @logged_in = provider_signed_in?
  end
end
