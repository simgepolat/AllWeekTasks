$(document).ready(function() {
    $('#listProducts').click(function() {
        $.ajax({
            url: 'products.json',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                $('#productContainer').empty();

                data.products.forEach(function(product) {
                    const productCard = $('<a>', {
                        class: 'product-card',
                        href: product.link,
                        target: '_blank'
                    }).append(
                        $('<div>', {
                            class: 'product-info'
                        }).append(
                            $('<h2>', {
                                class: 'product-name',
                                text: product.name
                            }),
                            $('<p>', {
                                class: 'product-price',
                                text: product.price
                            })
                        )
                    );
                    $('#productContainer').append(productCard);
                });
            },
            error: function() {
                alert('There was an error loading products!');
            }
        });
    });
}); 