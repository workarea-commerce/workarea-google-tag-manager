module Workarea
  module GoogleTagManager
    class Engine < ::Rails::Engine
      include Workarea::Plugin
      isolate_namespace Workarea::GoogleTagManager
    end
  end
end
