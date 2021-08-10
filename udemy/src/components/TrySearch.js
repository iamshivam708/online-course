import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class TrySearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
             search:''
        }
    }

    handleSearch = (e) =>{
        e.preventDefault()
        this.props.history.push("/search/"+ this.state.search)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSearch} className="form">
                    <input className="form-control" placeholder="Search Here" size="50" style={{borderRadius: '50px'}} type="text" name="search" onChange={e => this.setState({search: e.target.value})}/>
                </form>
            </div>
        )
    }
}

export default withRouter(TrySearch)