/* global productListPayload, orderPayload */
(function () {
    'use strict';

    function teardown() {
        window.dataLayer = [];
    }

    describe('WORKAREA.googleTagManager', function () {
        describe('setup', function () {
            it('Adds a dataLayer to the window', function () {
                expect(window.dataLayer).to.be.an('array');
            });
        });

        describe('categoryView', function () {
            before(function(){
                WORKAREA.analytics.fireCallback('categoryView',
                    {
                        "name" : "Games",
                        "sort" : "top_sellers",
                        "page" : 1,
                        "filters" : {}
                    }
                );
            });

            it('pushes the category view event to the dataLayer', function () {
                expect(window.dataLayer[0].event).to.eq('categoryView');
            });

            it('adds the payload to the dataLayer', function () {
                expect(window.dataLayer[0].name).to.eq('Games');
                expect(window.dataLayer[0].sort).to.eq('top_sellers');
                expect(window.dataLayer[0].page).to.eq(1);
            });

            after(teardown);
        });

        describe('searchResultsView', function () {
            before(function(){
                WORKAREA.analytics.fireCallback('searchResultsView',
                    {
                        "terms" : "query string",
                        "sort" : "relevance",
                        "page" : 1,
                    }
                );
            });

            it('pushes the searchResultsView event to the dataLayer', function () {
                expect(window.dataLayer[0].event).to.eq('searchResultsView');
            });

            it('adds the payload to the dataLayer', function () {
                expect(window.dataLayer[0].terms).to.eq('query string');
                expect(window.dataLayer[0].sort).to.eq('relevance');
                expect(window.dataLayer[0].page).to.eq(1);
            });

            after(teardown);
        });

        describe('productList', function () {
            before(function(){
                WORKAREA.analytics.fireCallback('productList', productListPayload());
            });

            it('pushes an ecommerce event for impressions to the dataLayer', function () {
                expect(window.dataLayer[0].ecommerce.impressions).to.exist;
                expect(window.dataLayer[0].ecommerce.impressions.length).to.eq(20);
            });

            after(teardown);
        });


        describe('productClick', function () {
            before(function(){
                WORKAREA.analytics.fireCallback('productClick',
                    {
                        'category' : "Automotive",
                        'id' : "4AF99AB7C8",
                        'list' : "Movies & Shoes",
                        'name' : "Heavy Duty Iron Bag",
                        'position' : 0,
                        'price' : 19.77,
                        'sale' : false,
                        'sku' : "288457637-1"
                    }
                );
            });

            it('pushes the productClick event to the dataLayer', function () {
                expect(window.dataLayer[0].event).to.eq('productClick');
            });

            it('announces ecommerce event to the dataLayer with correct data', function () {
                var ecommerceEvent = window.dataLayer[0].ecommerce,
                    product = ecommerceEvent.click.products[0];

                expect(ecommerceEvent).to.exist;

                expect(ecommerceEvent.click.actionField.list).to.eq('Movies & Shoes');
                expect(product.name).to.eq('Heavy Duty Iron Bag');
                expect(product.id).to.eq('4AF99AB7C8');
                expect(product.price).to.eq(19.77);
                expect(product.category).to.eq('Automotive');
                expect(product.variant).to.eq('288457637-1');
                expect(product.position).to.eq(0);
            });

            after(teardown);
        });


        describe('productQuickView', function () {
            before(function(){
                WORKAREA.analytics.fireCallback('productQuickView',
                    {
                        "terms" : "query string",
                        "sort" : "top_sellers",
                        "page" : 1,
                    }
                );
            });

            it('pushes the quickview event to the dataLayer', function () {
                expect(window.dataLayer[0].event).to.eq('quickview');
            });

            after(teardown);
        });


        describe('productView', function () {
            before(function(){
                WORKAREA.analytics.fireCallback('productView',
                    {
                        'category' : 'Automotive',
                        'id' : '4AF99AB7C8',
                        'name' : 'Heavy Duty Iron Bag',
                        'price' : 80.76,
                        'quantity' : '1',
                        'sale' : false,
                        'sku' : '288457637-1'
                    }
                );
            });

            it('pushes an ecommerce detail event to the dataLayer', function () {
                expect(window.dataLayer[0].ecommerce.detail).to.exist;
            });

            it('announces the products details in the ecommerce event', function () {
                var product = window.dataLayer[0].ecommerce.detail.products[0];
                expect(product.name).to.eq('Heavy Duty Iron Bag');
                expect(product.id).to.eq('4AF99AB7C8');
                expect(product.price).to.eq(80.76);
                expect(product.category).to.eq('Automotive');
                expect(product.variant).to.eq('288457637-1');
            });

            after(teardown);
        });

        describe('addToCart', function () {
            before(function(){
                WORKAREA.analytics.fireCallback('addToCart',
                    {
                        'category' : 'Automotive',
                        'id' : '4AF99AB7C8',
                        'name' : 'Heavy Duty Iron Bag',
                        'price' : 80.76,
                        'quantity' : '1',
                        'sale' : false,
                        'sku' : '288457637-1'
                    }
                );
            });

            it('pushes the addToCart event to the dataLayer', function () {
                expect(window.dataLayer[0].event).to.eq('addToCart');
            });

            it('announces an ecommerce add event with product data to the dataLayer', function () {
                expect(window.dataLayer[0].ecommerce.add).to.exist;
            });

            it('adds correct product data in dataLayer', function () {
                var product = window.dataLayer[0].ecommerce.add.products[0];
                expect(product.name).to.eq('Heavy Duty Iron Bag');
                expect(product.id).to.eq('4AF99AB7C8');
                expect(product.category).to.eq('Automotive');
                expect(product.variant).to.eq('288457637-1');
                expect(product.price).to.eq(80.76);
                expect(product.quantity).to.eq('1');
            });

            after(teardown);
        });

        describe('removeFromCart', function () {
            before(function(){
                WORKAREA.analytics.fireCallback('removeFromCart',
                    {
                        'category' : 'Automotive',
                        'id' : '4AF99AB7C8',
                        'name' : 'Heavy Duty Iron Bag',
                        'price' : 80.76,
                        'quantity' : '1',
                        'sale' : false,
                        'sku' : '288457637-1'
                    }
                );
            });

            it('pushes the removeFromCart event to the dataLayer', function () {
                expect(window.dataLayer[0].event).to.eq('removeFromCart');
            });

            it('announces an ecommerce add event with product data to the dataLayer', function () {
                expect(window.dataLayer[0].ecommerce.remove).to.exist;
            });

            it('adds correct product data in dataLayer', function () {
                var product = window.dataLayer[0].ecommerce.remove.products[0];
                expect(product.name).to.eq('Heavy Duty Iron Bag');
                expect(product.id).to.eq('4AF99AB7C8');
                expect(product.category).to.eq('Automotive');
                expect(product.variant).to.eq('288457637-1');
                expect(product.price).to.eq(80.76);
                expect(product.quantity).to.eq('1');
            });

            after(teardown);
        });

        describe('cartView', function () {
            before(function(){
                WORKAREA.analytics.fireCallback('cartView', orderPayload());
            });

            it('announces a checkout event in the dataLayer', function () {
                expect(window.dataLayer[0].event).to.eq('checkout');
            });

            it('announces a checkout enhanced ecommerce event in the dataLayer', function () {
                expect(window.dataLayer[0].ecommerce.checkout).to.exist;
            });

            it('announces step 1 of checkout in the dataLayer', function () {
                var step = window.dataLayer[0].ecommerce.checkout.actionField.step;
                expect(step).to.eq(1);
            });

            after(teardown);
        });

        describe('checkoutAddressesView', function () {
            before(function(){
                WORKAREA.analytics.fireCallback('checkoutAddressesView',orderPayload());
            });

            it('announces a checkout event in the dataLayer', function () {
                expect(window.dataLayer[0].event).to.eq('checkout');
            });

            it('announces step 2 of checkout in the dataLayer', function () {
                var step = window.dataLayer[0].ecommerce.checkout.actionField.step;
                expect(step).to.eq(2);
            });

            after(teardown);
        });

        describe('checkoutShippingView', function () {
            before(function(){
                WORKAREA.analytics.fireCallback('checkoutShippingView', orderPayload());
            });

            it('announces a checkout event in the dataLayer', function () {
                expect(window.dataLayer[0].event).to.eq('checkout');
            });

            it('announces step 3 of checkout in the dataLayer', function () {
                var step = window.dataLayer[0].ecommerce.checkout.actionField.step;
                expect(step).to.eq(3);
            });

            after(teardown);
        });

        describe('checkoutShippingServiceSelected', function () {
            before(function(){
                WORKAREA.analytics.fireCallback('checkoutShippingServiceSelected',
                    {
                        "name" : "Ground",
                        'price' : 7
                    }
                );
            });

            it('announces a checkoutOption event in the dataLayer', function () {
                expect(window.dataLayer[0].event).to.eq('checkoutOption');
            });

            it('adds the shipping service to the dataLayer', function () {
                var actionField = window.dataLayer[0].ecommerce.checkout_option.actionField;

                expect(actionField.step).to.eq(3);
                expect(actionField.option).to.eq('Ground');
            });

            after(teardown);
        });

        describe('checkoutPaymentView', function() {
            before(function(){
                WORKAREA.analytics.fireCallback('checkoutPaymentView',orderPayload());
            });

            it('announces a checkout event in the dataLayer', function () {
                expect(window.dataLayer[0].event).to.eq('checkout');
            });

            it('announces step 4 of checkout in the dataLayer', function () {
                var step = window.dataLayer[0].ecommerce.checkout.actionField.step;
                expect(step).to.eq(4);
            });

            after(teardown);
        });

        describe('checkoutPaymentSelected', function () {
            before(function(){
                WORKAREA.analytics.fireCallback('checkoutPaymentSelected',
                    {
                        "type" : "new_card"
                    }
                );
            });

            it('announces a checkoutOption event in the dataLayer', function () {
                expect(window.dataLayer[0].event).to.eq('checkoutOption');
            });

            it('adds the payment method to the dataLayer', function () {
                var actionField = window.dataLayer[0].ecommerce.checkout_option.actionField;

                expect(actionField.step).to.eq(4);
                expect(actionField.option).to.eq('new_card');
            });

            after(teardown);
        });

        describe('checkoutOrderPlaced', function () {
            before(function(){
                WORKAREA.analytics.fireCallback('checkoutOrderPlaced', orderPayload());
            });

            it('announces an ecommerce purchase event in the dataLayer', function () {
                expect(window.dataLayer[0].ecommerce.purchase).to.exist;
            });

            it('announces transaction data in dataLayer', function() {
                var actionField = window.dataLayer[0].ecommerce.purchase.actionField;

                expect(actionField.id).to.eq('6705E78231');
                expect(actionField.affiliation).to.eq('Dummy App');
                expect(actionField.revenue).to.eq(152.92);
                expect(actionField.tax).to.eq(0.00);
                expect(actionField.shipping).to.eq(7.00);
                expect(actionField.coupon).to.eq('promo_1,promo_2');
            });

            after(teardown);
        });
    });
}());
