import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Search extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             query: this.props.match.params.query,
             courses:[]
        }
    }

    componentDidMount = () =>{
        var url = `http://localhost:5000/search/${this.state.query}`
            axios.get(url).then((res) =>{
                if(res.data !== 'none'){
                    this.setState({
                        courses: res.data,
                    })
                }else{
                    this.setState({
                        courses: null,
                    })
                }
            }).catch((err) =>{
                console.log(err)
            })
    }
    

    render() {
        return (
            <div className="Categories">
                <Header/>
                <div className="container mt-4 px-5 py-5 mb-4" style={{background:'#fafafa'}}>
                    <h3 align="center">Searched Courses</h3>
                    
                    {(() =>{
                        if(this.state.courses != null){
                            return (this.state.courses.map((course) => (
                                <div className="row mt-3 py-3 px-3" key={course[0]}>
                                    <div className="col-12 col-md-6">
                                        <img src={'/images/'+ course[1]} width="100%" alt="..." /> 
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <Link to={"/courseDetail/"+ course[0]}><h3 className="mt-5" style={{fontFamily: 'Mate SC, serif'}}><b>{course[2]}</b></h3></Link>
                                        <p className="mt-2">{course[3]}</p>
                                        <p>Rating: <span className="text-danger">*****</span></p>
                                        <p>Created By <span className="text-primary">{course[4]}</span></p>
                                    </div>
                                    <hr className="mt-4"/>
                                </div>
                                )))
                        }else{
                            return "No search result found"
                        }

                    })()}
                    
                </div>
            </div>
        )
    }
}

export default Search