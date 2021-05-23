import React, { useState } from 'react';
import index from "classnames";

/*//классовая компонента
class Categories extends React.Component {
    state = {
        activeItem: 0
    };

    onSelectItem = index => {
        this.setState ({
            activeItem: index
        });
    }

    render () {
        const { items } = this.props;
        return (
            <div className="categories">
                <ul>
                    {
                        items.map ((name, index) =>
                            <li className={ this.state.activeItem === index ? 'active' : '' }
                                onClick={ () => this.onSelectItem (index) }
                                key={ `${ index }_${ name }` }>
                                { name }
                            </li>
                        ) }
                </ul>
            </div>
        );
    }
}*/

//функциональная компонента
const Categories = ({ items }) => {
    //console.log (items)
     const [ activeItem, setActiveItem ] = useState (null);
     const [ count, setCount ] = useState (0);

     //на каждое сост в функц. компоненте требуется делать свой useState
     const selectedItem = (index) => {
         setActiveItem(index);
         setCount((num) => num + 1);
    }


    return (
        <div className="categories">

            <ul>
            <h1 onClick={selectedItem}>{count} </h1>
                {
                    items.map ((name, index) =>
                        <li
                            className={ activeItem === index ? 'active' : '' }
                            onClick={ () => selectedItem (index) }
                            key={ `${ index }_${ name }` }>
                            { name }
                        </li>
                    ) }
            </ul>
        </div>
    );
}

export default Categories;