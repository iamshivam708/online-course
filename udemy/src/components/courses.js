import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export class Courses extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            categories:[]
        }
    }

    componentDidMount = () =>{
        var url = "http://localhost:5000/categories"
        axios.get(url).then((res) =>{
            this.setState({
                categories: res.data
            })
        }).catch((err) =>{
            console.log(err);
        })
    }
    
    render() {
        return (
        <div className="courses">
            <div className="container-fluid mt-5">
                <div className="container-fluid mt-3 px-5 py-5" style={{backgroundColor: '#e3f2fd', borderRadius:'50px'}} >
                    <h1 style={{fontFamily: 'Mate SC, serif'}}>Top Categories</h1>
                    <p className="lead">Explore our Best Categories</p>
                    <div className="row row-cols-2 row-cols-md-3 g-3 mt-3">
                        {this.state.categories.map((category) =>(
                            <div className="col" key={category[0]}>
                            <div className="card" style={{boxShadow: '5px 8px 10px 3px #90caf9'}}>
                                <Link to={"/categories/" + category[0]}><img style={{height:'200px'}} src={"images/"+ category[1]} className="card-img-top" alt="..."  /></Link>
                                <p className="lead text-center">{category[2]}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Courses