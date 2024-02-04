# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :logged_in?

  def logged_in?
    @logged_in = current_provider.present?
  end
end
