import React, { useState } from 'react';

function CustomSelect() {
    const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility
    const [selectedItem, setSelectedItem] = useState('Featured'); // State to store selected item

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Handle item selection
    const handleSelect = (item) => {
        setSelectedItem(item); // Update the selected item
        setIsOpen(false); // Close the dropdown after selection
    };

    return (
        <div className="tf-control-sorting d-flex justify-content-end">
            <div className="tf-dropdown-sort" onClick={toggleDropdown}>
                <div className="btn-select">
                    {/* Display the selected item */}
                    <span className="text-sort-value">{selectedItem}</span>
                    <span className={`icon icon-arrow-down ${isOpen ? 'rotate-180' : ''}`}></span>
                </div>

                {/* Dropdown menu */}
                {isOpen && (
                    <div className="dropdown-menu">
                        {['Featured', 'Best selling', 'Alphabetically, A-Z', 'Alphabetically, Z-A', 'Price, low to high', 'Price, high to low', 'Date, old to new', 'Date, new to old'].map((item, index) => (
                            <div
                                key={index}
                                className={`select-item ${selectedItem === item ? 'active' : ''}`}
                                onClick={() => handleSelect(item)}
                            >
                                <span className="text-value-item">{item}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CustomSelect;
