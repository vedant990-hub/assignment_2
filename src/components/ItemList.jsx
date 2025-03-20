import Item from "./Item";

const ItemList = ({ items, onDelete }) => {
    if (!items || items.length === 0) {
        return <div>No items available</div>;
    }

    return (
        <div className="item-list">
            <h1>Doors List</h1>
            {items.map((item) => (
                <Item key={item.id} item={item} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default ItemList;