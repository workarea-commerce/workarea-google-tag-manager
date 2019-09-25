Workarea Tag Manager
================================================================================

Google Tag Manager plugin for the Workarea platform.
Including Enhanced ecommerce configuration.

Do not use this plugin for Google Analytics, workarea-google-analytics is well maintained and provides more functionality for GA specifically.

Tag manager Sets up a dataLayer on the window and pushes all data to the dataLayer. This is read by GTM and can be used in custom variables.

Getting Started
--------------------------------------------------------------------------------

Add the gem to your application's Gemfile:

```ruby
# ...
gem 'workarea-google_tag_manager'
# ...
```

Update your application's bundle.

```bash
cd path/to/application
bundle
```

Configuration
--------------------------------------------------------------------------------

In your applications `config/initializer/workarea.rb` add the following configuration:

```ruby
Workarea.config.google_tag_manager.container_id = 'your-container-id'
```

Shared Events
--------------------------------------------------------------------------------

These Events are re-used by many of the events detailed in the Summary of events below

### Checkout Step

'step' is a number equal to the checkout step

1. Cart
2. Addresses
3. Shipping
4. Payment

dataLayer:

    'event': 'checkout',
    'ecommerce': {
        'checkout': {
            'actionField': { 'step': step },
            'products': [
                {
                    'id': "4559F84840",
                    'name': "Slim Ankle Pants",
                    'category': "Women's Pants",
                    'variant': "292205283-4",
                    'price': 31.56,
                    'quantity': 1
                }
            ]
        }
    }

Summary of Events
--------------------------------------------------------------------------------

### Category View

Sent on category show pages (aka product browse)

dataLayer:

    'event': 'categoryView',
    'name': 'Category Name',
    'sort': "top_sellers",
    'page': 1

---

### searchResultsView

Sent on search results page

dataLayer:

    'event': 'searchResultsView',
    'terms': 'red shirt',
    'sort': 'relevance',
    'page': 1

---

### Product List

Sent anywhere there are lists of products, including: product browse, search results, cart page, product recommendations, category summary content block, product list content block.

dataLayer:
    'ecommerce': {
        'impressions': [
            {
                'id': "4559F84840",
                'price': 31.56,
                'name': "Slim Ankle Pants",
                'category': "Women's Pants",
                'variant': "292205283-4",
                'list': "Slim Ankle Pants",
                'position': 1
            }
        ]
    }

---

### Product Click

Triggered when a user clicks on any product summary in the storefront.

dataLayer:

    'event': 'productClick',
    'ecommerce': {
        'click': {
            'actionField': {'list': "Women's Pants"},
            'products': [{
                'name': "Slim Ankle Pants",
                'id': "4559F84840",
                'price': 31.56,
                'category': "Women's Pants",
                'variant': "292205283-4",
                'position': 1
            }]
        }
    }

---

### Product Quick View

Triggered when a user opens a product quickview

dataLayer:

    'event': 'quickview',
    'ecommerce': {
        'detail': {
            'actionField': '',
            'products': [{
                'name': "Slim Ankle Pants",
                'id': "4559F84840",
                'price': 31.56,
                'category': "Women's Pants",
                'variant': "292205283-4",
            }]
        }
    }

---

### Product View

Triggered when a user visits the product detail page

dataLayer:

    'ecommerce': {
        'detail': {
            'actionField': '',
            'products': [{
                'name': "Slim Ankle Pants",
                'id': "4559F84840",
                'price': 31.56,
                'category': "Women's Pants",
                'variant': "292205283-4",
            }]
        }
    }

---

### Add To Cart

Triggered when add to cart button is clicked

dataLayer:

    'event': 'addToCart',
    'ecommerce': {
        'add': {
            'products': [{
                'id': "4559F84840",
                'name': "Slim Ankle Pants",
                'category': "Women's Pants",
                'variant': "292205283-4",
                'price': 31.56,
                'quantity': 1
            }]
        }
    }

---

### Remove From Cart

Triggered when a product is removed from the cart

dataLayer:

    'event': 'removeFromCart',
    'ecommerce': {
        'remove': {
            'products': [{
                'id': "4559F84840",
                'name': "Slim Ankle Pants",
                'category': "Women's Pants",
                'variant': "292205283-4",
                'price': 31.56,
                'quantity': 1
            }]
        }
    }

---

### Cart View

Triggered when the cart page is opened, including cart summaries (drawer or dropdown)

Uses Checkout Step shared function

---

### Checkout Addresses View

Triggered on the Addresses step of checkout

Uses Checkout Step shared function

---

### Checkout Shipping View

Triggered on the Shipping step of checkout

Uses Checkout Step shared function

---

### Checkout Shipping Service Selected

Triggered when the user changes the shipping option on the Shipping step of checkout

dataLayer:

    'event': 'checkoutOption',
    'ecommerce': {
        'checkout_option': {
            'actionField': {'step': 4, 'option': 'FEDEX Ground'}
        }
    }

---

### Checkout Payment View

Triggered on the Payment step of checkout

Uses Checkout Step shared function

---

### Checkout Payment Selected

Triggered when the user changes the payment method on the Payment step of checkout

dataLayer:

    'event': 'checkoutOption',
    'ecommerce': {
        'checkout_option': {
            'actionField': {'step': 5, 'option': 'new_card'}
        }
    }

---

### Checkout Order Placed

Triggered on the order confirmation page of checkout

dataLayer:

    'ecommerce': {
        'purchase': {
            'actionField': {
                'id': 'CF6D17E28B',
                'affiliation': 'Site Name',
                'revenue': 39.50,
                'tax': 1.94,
                'shipping': 7.00,
                'coupon': 'promocode1, promocode2'
            },
            'products': [
                {
                    'name': "Slim Ankle Pants",
                    'id': "4559F84840",
                    'price': 31.56,
                    'category': "Women's Pants",
                    'variant': "292205283-4",
                    'quantity': 1
                }
            ]
        }
    }

Workarea Commerce Documentation
--------------------------------------------------------------------------------

See [https://developer.workarea.com](https://developer.workarea.com) for Workarea Commerce documentation.

License
--------------------------------------------------------------------------------

Workarea Google Tag Manager is released under the [Business Software License](LICENSE)
