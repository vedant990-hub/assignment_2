const Item = ({ item, onDelete }) => {
    return (
        <div className="item">
            <h3>{item.name}</h3>
            <p>Status: {item.status}</p>
            <button 
                onClick={() => onDelete(item.id)}
                style={{ backgroundColor: '#ff4444', color: 'white', marginTop: '10px' }}
            >
                Delete
            </button>
        </div>
    );
};

export default Item;