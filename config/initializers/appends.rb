module Workarea
  Plugin.append_javascripts(
    'storefront.modules',
    'workarea/storefront/google_tag_manager/modules/adapter'
  )

  Plugin.append_partials(
    'storefront.document_head',
    'workarea/storefront/google_tag_manager/script'
  )

  Plugin.append_partials(
    'storefront.javascript',
    'workarea/storefront/google_tag_manager/no_script'
  )
end
