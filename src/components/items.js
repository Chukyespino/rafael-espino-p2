import React, { Component } from "react"

class ListItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }
    createTasks(item){
        return <li onClick={() => this.delete(item.key)} 
                key={ item.key}>{item.text}</li>
    }

    delete(key) {
        this.props.delete(key);
    }
    render(){
        var entriItems = this.props.entries;
        var itemsList = entriItems.map (this.createTasks);

        return(
            <ul className="theList">
            {itemsList}
            </ul>
        );
    }
}
export default ListItems;