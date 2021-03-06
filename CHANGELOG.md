Workarea Google Tag Manager 4.3.3 (2020-06-18)
--------------------------------------------------------------------------------

*   Use `product_name` in Order Item Payloads

    When the `addToCart` and `removeFromCart` analytics events are fired,
    the payload is populated from the `#order_item_analytics_data` helper in
    Ruby. This payload stores the product name in an attribute called
    `product_name`, but the analytics adapter was written to use the `.name`
    attribute, so when analytics events made it to GTM, they would not be
    populated with the product name. To fix this, the `product_name` field
    is now used in both the `addToCart` and `removeFromCart` analytics
    events in the google tag manager adapter.

    GTM-2

    Tom Scott



Workarea Google Tag Manager 4.3.2 (2019-08-22)
--------------------------------------------------------------------------------

*   Open Source! For real!
 
 
 
Workarea Google Tag Manager 4.3.1 (2019-08-21)
--------------------------------------------------------------------------------

*   Open Source! lol jk



Workarea Google Tag Manager 4.3.0 (2019-05-28)
--------------------------------------------------------------------------------

*   Move GTM script to the site head

    Move GTM script portion into its own partial.
    Rename no script partial.
    Update append points. Script will now be appended to the head.

    WLGTM-13
    James Dobson



Workarea Google Tag Manager 4.2.6 (2019-04-16)
--------------------------------------------------------------------------------

*   Update for v3.4 compatibility

    * Add CI scripts
    * update gemfile for v3.4
    * Fix ESlint errors
    * Update rubocop configuration and get the cops passing
    * Add keepfile for test/dummy/tmp/screenshots

    WLGTM-12
    Jake Beresford



Workarea Google Tag Manager 4.2.5 (2019-02-19)
--------------------------------------------------------------------------------

*   Correct casing of productQuickview adapter callback function name

    WLGTM-11
    Jake Beresford



Workarea Google Tag Manager 4.2.4 (2018-12-11)
--------------------------------------------------------------------------------

*   Remove unecessary tests causing issues in builds

    WLGTM-10
    Eric Pigeon



Workarea Google Tag Manager 4.2.3 (2018-10-30)
--------------------------------------------------------------------------------

*   Update implementation of container ID to use configuration rather than secrets

    This change allows much easier per-site configuration of GTM for multi-site applications.

    * Includes a fallback to secrets for configuration but prefers apps to use configuration over secrets

    WLGTM-9
    Jake Beresford



Workarea Google Tag Manager 4.2.2 (2018-04-11)
--------------------------------------------------------------------------------

*   Remove duplicate closing script tag

    WLGTM-8
    Kristin Henson


Workarea Google Tag Manager 4.2.1 (2018-01-11)
--------------------------------------------------------------------------------

*   Prevent GTM making external requests in test

    WLGTM-6
    Jake Beresford


Workarea Google Tag Manager 4.2.0 (2017-10-13)
--------------------------------------------------------------------------------

Developers - note that this change moves configuration of GTM container ID from
Workarea.config in to application secrets, you will need to update your secrets
file when taking this change. See README for instructions.

*   Use secrets to configure Google Tag Manager

    WLGTM-3
    Jake Beresford
