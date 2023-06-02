import ItemList from "../item-list";

import productsData from "../data/products";

const items = productsData.map(item => ({
    ...item,
    image: item.images[0],
    href: `/products/${item.id}`,
    price: item.prices[0].unit_amount,
}))

function Products() {
    return (
        <ItemList items={items} />
    );
}

export default Products;
