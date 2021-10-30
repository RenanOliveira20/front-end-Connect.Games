import React, { Component } from "react";

import { InputPost } from './styles'

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
            <div style={{ height:'10vh', display:'flex', alignItems:'center'}}>
                <InputPost
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