import { useState } from 'react';

const AddItemForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('closed');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ name, status });
        setName('');
        setStatus('closed');
    };

    return (
        <div className="add-item-form">
            <h2>Add New Door</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Door Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="closed">Closed</option>
                        <option value="open">Open</option>
                    </select>
                </div>
                <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white' }}>
                    Add Door
                </button>
            </form>
        </div>
    );
};

export default AddItemForm;