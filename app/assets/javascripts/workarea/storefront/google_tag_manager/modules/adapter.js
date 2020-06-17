WORKAREA.analytics.registerAdapter('googleTagManager', function () {
    'use strict';

    var products,

        checkoutStep = function (payload, step) {
            products = [];

            _.each(payload.items, function (impression) {
                products.push({
                    'id': impression.product_id,
                    'name': impression.product_name,
                    'category': impression.category,
                    'variant': impression.sku,
                    'price': impression.price,
                    'quantity': impression.quantity
                });
            });

            window.dataLayer.push({
                'event': 'checkout',
                'ecommerce': {
                    'checkout': {
                        'actionField': { 'step': step },
                        'products': products
                    }
                }
            });
        };

    window.dataLayer = window.dataLayer || [];

    return {
        'categoryView': function (payload) {
            window.dataLayer.push({
                'event': 'categoryView',
                'name': payload.name,
                'sort': payload.sort,
                'page': payload.page
            });
        },

        'searchResultsView': function (payload) {
            window.dataLayer.push({
                'event': 'searchResultsView',
                'terms': payload.terms,
                'sort': payload.sort,
                'page': payload.page
            });
        },

        'productList': function (payload) {
            var impressions = [];

            _.each(payload.impressions, function (impression) {
                impressions.push({
                    'id': impression.id,
                    'price': impression.price,
                    'name': impression.name,
                    'category': impression.category,
                    'variant': impression.sku,
                    'list': payload.name,
                    'position': impression.position
                });
            });

            window.dataLayer.push({
                'ecommerce': {
                    'impressions': impressions
                }
            });
        },

        'productClick': function (payload) {
            window.dataLayer.push({
                'event': 'productClick',
                'ecommerce': {
                    'click': {
                        'actionField': {'list': payload.list},
                        'products': [{
                            'name': payload.name,
                            'id': payload.id,
                            'price': payload.price,
                            'category': payload.category,
                            'variant': payload.sku,
                            'position': payload.position
                        }]
                    }
                }
              });
        },

        'productQuickview': function (payload) {
            window.dataLayer.push({
                'event': 'quickview',
                'ecommerce': {
                    'detail': {
                        'actionField': '',
                        'products': [{
                            'name': payload.name,
                            'id': payload.id,
                            'price': payload.price,
                            'category': payload.category,
                            'variant': payload.sku
                        }]
                    }
                }
              });
        },

        'productView': function (payload) {
            window.dataLayer.push({
                'ecommerce': {
                    'detail': {
                        'actionField': '',
                        'products': [{
                            'name': payload.name,
                            'id': payload.id,
                            'price': payload.price,
                            'category': payload.category,
                            'variant': payload.sku
                        }]
                    }
                }
              });
        },

        'addToCart': function (payload) {
            window.dataLayer.push({
                'event': 'addToCart',
                'ecommerce': {
                    'add': {
                        'products': [{
                            'id': payload.id,
                            'name': payload.product_name,
                            'category': payload.category,
                            'variant': payload.sku,
                            'price': payload.price,
                            'quantity': payload.quantity
                        }]
                    }
                }
            });
        },

        'removeFromCart': function (payload) {
            window.dataLayer.push({
                'event': 'removeFromCart',
                'ecommerce': {
                    'remove': {
                        'products': [{
                            'id': payload.id,
                            'name': payload.product_name,
                            'category': payload.category,
                            'variant': payload.sku,
                            'price': payload.price,
                            'quantity': payload.quantity
                        }]
                    }
                }
            });
        },

        'cartView': function (payload) {
            checkoutStep(payload, 1);
        },

        'checkoutAddressesView': function (payload) {
            checkoutStep(payload, 2);
        },

        'checkoutShippingView': function (payload) {
            checkoutStep(payload, 3);
        },

        'checkoutShippingServiceSelected': function (payload) {
            window.dataLayer.push({
                'event': 'checkoutOption',
                'ecommerce': {
                    'checkout_option': {
                        'actionField': {'step': 3, 'option': payload.name}
                    }
                }
            });
        },

        'checkoutPaymentView': function (payload) {
            checkoutStep(payload, 4);
        },

        'checkoutPaymentSelected': function (payload) {
            window.dataLayer.push({
                'event': 'checkoutOption',
                'ecommerce': {
                    'checkout_option': {
                        'actionField': {'step': 4, 'option': payload.type}
                    }
                }
            });
        },

        'checkoutOrderPlaced': function (payload) {
            products = [];

            _.each(payload.items, function (impression) {
                products.push({
                    'name': impression.product_name,
                    'id': impression.product_id,
                    'price': impression.price,
                    'category': impression.category,
                    'variant': impression.sku,
                    'quantity': impression.quantity
                });
            });

            window.dataLayer.push({
                'ecommerce': {
                    'purchase': {
                        'actionField': {
                            'id': payload.id,
                            'affiliation': payload.site_name,
                            'revenue': payload.total_price,
                            'tax': payload.tax_total,
                            'shipping': payload.shipping_total,
                            'coupon': payload.promo_codes.join(',')
                        },
                        'products': products
                    }
                }
            });
        }
    };
});
