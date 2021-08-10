import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export class BestCourses extends Component {
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
        <div className="courses">
            <div className="container-fluid mt-5">
                <div className="container-fluid mt-3 px-5 py-5" style={{backgroundColor: '#e3f2fd', borderRadius:'50px'}} >
                    <h1 style={{fontFamily: 'Mate SC, serif'}}>Best Courses</h1>
                    <p className="lead">Explore our best Courses for absolutely free</p>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
                        {(() =>{
                            if(this.state.course_intro !== null){
                                return(this.state.course_intro.map((course) => (
                                    <div className="col"  key={course[0]}>
                                        <div className="card" style={{boxShadow: '5px 8px 10px 3px #90caf9',height:'450px'}}>
                                            <Link to={"/courseDetail/"+ course[0]}><img src={"images/" + course[1]} className="card-img-top" alt="..." height="auto" /></Link>
                                            <div className="card-body">
                                                <h5 className="card-title">{course[2]}</h5>
                                                <p className="card-text lead">{course[3]}</p>
                                                <p>Created By: <span style={{color:'red'}}>{course[4]}</span> </p>
                                            </div>
                                        </div>
                                    </div>
                                    )))
                            }else{
                                return "no courses yet"
                            }
                        })()}

                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default BestCourses