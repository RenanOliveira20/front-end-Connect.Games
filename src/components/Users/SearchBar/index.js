import React, { Component } from "react";

class SearchBar extends Component {
    state = {
        input: ''
    }

    handleSearch = async (event) => {
        await this.setState({
            input:event.target.value
        })
        this.props.userFilter(this.state.input)
    }


    render(){
        return (
        <>
            <div>
                <input
                    type='text'
                    placeholder='Search...'
                    onChange={this.handleSearch}
                    value={this.state.input}
                />
            </div>
        </>
    )}
}

export default SearchBar;