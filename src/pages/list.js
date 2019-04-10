import React, {Component} from 'react'
import ListItems from '../components/items';
import styled from 'styled-components'


const AddButton = styled.button`
  padding: 10px;
  font-size: 16px;
  font-weight:bold ;
  margin: 10px;
  margin-right: 10px;
  border-radius: 10px;
  background-image: ${props => (props.primary ? "linear-gradient(rgba(102, 53, 153, 0.651), rgba(38, 0, 255, 0.61))" : "linear-gradient(rgba(255, 0, 0, 0.199) .05%, rgba(125, 203, 240, 0.315) 99%)")};
  color: ${props => (props.primary ? "white" : "blue")};
  border: 2px solid blue
`
class theList extends Component {
    constructor(props){
        super(props);
        this.state={ items:[]};
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !=="" ){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();
    }
    deleteItem(key){
        var filteredItems = this.state.items.filter(function (item){
                return (item.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }
    render() {
        return (
            <div className="listMain">
                <div className="listHeader">
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a }
                    placeholder="Enter Item">
                    </input>
                    
                    <AddButton  type="submit">ADD</AddButton>
                </form>
                </div>
                <ListItems entries={this.state.items}
                            delete={this.deleteItem}
                />
            </div>
        )
    }


}

export default theList;