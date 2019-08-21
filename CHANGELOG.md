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
