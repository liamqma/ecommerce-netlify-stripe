import ItemList from '../item-list'

const item = {
    name: 'Item Name',
    href: '/collections/collection-1',
    image: 'https://cdn.shopify.com/s/files/1/0610/0100/7272/products/Gargantua6_1500x.jpg?v=1645200403',
};


function SectionCollections() {
    return <ItemList items={[item, item, item, item, item, item, item, item, item]} />
}

export default SectionCollections;
