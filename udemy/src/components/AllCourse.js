import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import {Link} from 'react-router-dom'

class AllCourse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             course_intro:[]
        }
    }

    componentDidMount = () =>{
        var url = "http://localhost:5000/course_intro"
        axios.get(url).then((res) =>{
            if(res.data !== 'none'){
                this.setState({
                    course_intro: res.data
                })
            }else{
                this.setState({
                    course_intro: null
                })
            }
            
        }).catch((err) =>{
            console.log(err);
        })
    }
    
    render() {
        return (
            <div className="Allcourse">
                <Header/>
                <div className="container mt-4 px-5 py-5 mb-4" style={{background:'#fafafa'}}>
                    <h3 align="center">All Courses</h3>
                    
                    {(() =>{
                        if(this.state.course_intro != null){
                            return (this.state.course_intro.map((course) => (
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
                            return "No courses yet"
                        }

                    })()}
                    
                </div>
            </div>
        )
    }
}

export default AllCourse