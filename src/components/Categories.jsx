import React from 'react';

const Categories = ({ items }) => {
    console.log (items)
    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {
                    items.map ( (i, index) => <li key={index}>{ i }</li>)
                }
            </ul>
        </div>
    );
}

export default Categories;