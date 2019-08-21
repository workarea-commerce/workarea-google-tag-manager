require 'workarea'
require 'workarea/storefront'
require 'workarea/admin'

require 'workarea/google_tag_manager/engine'
require 'workarea/google_tag_manager/version'

module Workarea
  module GoogleTagManager
    # TODO: Remove this method and fallback to secrets configuration in the next
    # major, config via rails configuration is preferable and can be referenced
    # directly in the view
    def self.configure_container
      if Workarea.config.google_tag_manager_container_id.present?
        self.container_id = Workarea.config.google_tag_manager_container_id
      elsif Rails.application.secrets.google_tag_manager.present?
        secrets = Rails.application.secrets.google_tag_manager.deep_symbolize_keys

        self.container_id = secrets[:container_id]
      end
    end

    def self.container_id
      if Workarea.config.google_tag_manager.container_id.present?
        Workarea.config.google_tag_manager.container_id
      elsif Rails.application.secrets.google_tag_manager.present?
        message = <<~WARN
          Setting Google Tag Manager containter id via secrets is deprecated.
          Set your container_id via Workarea.config

          Workarea.configure do |config|
            config.google_tag_manager.container_id = YOUR_CONTAINER_ID
          end
        WARN
        ActiveSupport::Deprecation.warn(message)

        Rails.application.secrets.google_tag_manager[:container_id]
      else
        @container_id
      end
    end

    def self.container_id=(container_id)
      message = <<~WARN
        Workarea::GoogleTagManager.container_id= is deprecated.  Set your container_id
        via Workarea.config

        Workarea.configure do |config|
          config.google_tag_manager.container_id = YOUR_CONTAINER_ID
        end
      WARN
      ActiveSupport::Deprecation.warn(message)
      @container_id = container_id
    end

    def self.config
      Workarea.config.google_tag_manager
    end
  end
end
