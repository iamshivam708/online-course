import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import Swal from 'sweetalert2'
import CourseContent from './CourseContent'

class CourseDetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'shivam',
             isAuthorised: 'true',
             whatYouWillLearn: [],
             whoThisCourseFor:[],
             course:[],
             id: this.props.match.params.id,
             description:[],
             comments:[],
             rating:"",
             review:""
        }
    }

    componentDidMount = () =>{
        if(this.state.isAuthorised !== sessionStorage.getItem('isLogin')){
            this.props.history.push('/login');
        }else{
            // eslint-disable-next-line
            {/* getting single course */}
            var url3 = `http://localhost:5000/singleCourse/${this.state.id}`
            axios.get(url3).then((res) =>{
                this.setState({
                    course: res.data
                })
            }).catch((err) =>{
                console.log(err)
            })

            // eslint-disable-next-line
            {/* getting what you will learn for single course */}
            var url = `http://localhost:5000/whatlearn/${this.state.id}`
            axios.get(url).then((res) =>{
                if(res.data !== 'none'){
                    this.setState({
                        whatYouWillLearn: res.data
                    })
                }else{
                    this.setState({
                        whatYouWillLearn: null
                    })
                }
                
            }).catch((err) =>{
                console.log(err)
            })

            // eslint-disable-next-line
            {/* getting who this course for in single course */}
            var url2= `http://localhost:5000/whoCourse/${this.state.id}`
            axios.get(url2).then((res) =>{
                if(res.data !== 'none'){
                    this.setState({
                        whoThisCourseFor: res.data
                    })
                }else{
                    this.setState({
                        whoThisCourseFor: null
                    })
                }
                
            }).catch((err) =>{
                console.log(err)
            })
            

            // eslint-disable-next-line
            {/* getting course description for single course */}
            var url5 = `http://localhost:5000/courseDescription/${this.state.id}`
            axios.get(url5).then((res) =>{
                if(res.data !== 'none'){
                    this.setState({
                        description: res.data,
                    })
                }else{
                    this.setState({
                        description: null,
                    })
                }
            }).catch((err) =>{
                console.log(err)
            })


            // eslint-disable-next-line
             {/* getting course comments*/}
             var url6 = `http://localhost:5000/comments/${this.state.id}`
             axios.get(url6).then((res) =>{
                 if(res.data !== 'none'){
                    this.setState({
                        comments: res.data,
                    })
                 }else{
                    this.setState({
                        comments: null,
                    })
                 }
                 
             }).catch((err) =>{
                 console.log(err)
             })

        }
    }

    handleComment = (e) =>{
        e.preventDefault()
        var form = document.getElementById('form');
        var formData = new FormData(form);
        if(formData != null){
            var url = "http://localhost:5000/create_comments"
            axios.post(url, formData).then((res) =>{
                this.props.history.push('/courseDetail/'+ this.state.id);
                window.location.reload()
            }).catch((err) =>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something Went Error',
                })
            })
        }
        else{
            <Redirect to={"/courseDetail/"+ this.state.id }/>
        }
    }
    
    render() {
        return (
        <div className="courseDetail">
                <Header />
            {/* main details about course */}
            <div className="container-fluid py-3 px-5" style={{background:'#e3f2fd'}}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={'/images/'+ this.state.course[1]} width="100%" alt="..." /> 
                        </div>
                        <div className="col-12 col-md-6">
                            <h3 className="mt-5" style={{fontFamily: 'Mate SC, serif'}}><b>{this.state.course[2]}</b></h3>
                            <p className="mt-2">{this.state.course[3]}</p>
                            <p>Rating: <span className="text-danger">*****</span></p>
                            <p>Created By <span className="text-primary">{this.state.course[4]}</span></p>
                            <Link to={"/course/" + this.state.course[0]} className="btn btn-primary">Go To Course</Link>
                        </div>
                    </div>
                </div>

            {/* what you will learn and who this course is for */}
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 justify-content-center mb-4">
                        <div className="container-fluid mt-3 px-5 py-5" style={{backgroundColor: '#fafafa'}} >
                            <h3 style={{fontFamily: 'Mate SC, serif'}}>What You'll Learn</h3>
                            <div className="row row-cols-1 row-cols-md-2 mt-3">

                                {(() =>{
                                    if(this.state.whatYouWillLearn  != null){

                                       return (this.state.whatYouWillLearn.map((item) =>(
                                                    <div className="col" key={item[0]}>
                                                        <p><i className="fas fa-check"></i>&nbsp;&nbsp;{item[2]}</p>
                                                    </div>
                                                )))

                                    }else{
                                        return <p>nothing yet</p>
                                    }
                                })()}
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 justify-content-center mb-4">
                        <div className="container-fluid mt-3 px-5 py-5" style={{backgroundColor: '#fafafa'}} >
                            <h3 style={{fontFamily: 'Mate SC, serif'}}>Who This Course Is For</h3>
                            <div className="row row-cols-1 row-cols-md-2 mt-3">

                            {(() =>{
                                    if(this.state.whoThisCourseFor  != null){

                                       return (this.state.whoThisCourseFor.map((item) =>(
                                                    <div className="col" key={item[0]}>
                                                        <p><i className="fas fa-asterisk"></i>&nbsp;&nbsp;{item[2]}</p>
                                                    </div>
                                                )))

                                    }else{
                                        return <p>nothing yet</p>
                                    }
                                })()}

                            </div>
                        </div>
                    </div>

                 </div>
            </div>

            {/* course content */}
            <CourseContent id={this.state.id} />

            {/* course description */}
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 justify-content-center mb-4">
                        <div className="container-fluid mt-3 px-5 py-5" style={{backgroundColor: '#fafafa'}} >
                            <h3 style={{fontFamily: 'Mate SC, serif'}}>Course Description</h3>
                            <div className="row mt-3">
                                <div className="col-12" >
                                    <blockquote>{this.state.description[2]}</blockquote>
                                </div>
                            </div>
                        </div>
                    </div>

                 </div>
            </div>
        
            {/* Students Feedback */}
            <div className="container mt-4 py-5 px-5 mb-5" style={{background:'#fafafa'}}>
                <h3 className="text-dark text-center py-2 px-2" style={{background:'#64b5f6', borderRadius:'20px', fontFamily: 'Mate SC, serif'}}>Student Feedbacks</h3>
                <div className="row mt-5" align="cemter">
                    <div className="col-2 mt-5 text-center">
                        <h3>****</h3>
                        <p>Course Rating</p>
                    </div>
                    <div className="col-10">
                        <img src="/images/feedback.png" width="100%" height="200vh" alt="..." />
                    </div>
                </div>
                <div className="row mt-4">
                    <h4 className="text-center text-dark py-2 px-2" style={{background:'#64b5f6', borderRadius:'20px',fontFamily: 'Mate SC, serif'}}>Reviews</h4>
                    <form id="form" className="row g-2" onSubmit={this.handleComment}>
                        <input type="hidden" name="name" value={sessionStorage.getItem('name')} />
                        <input type="hidden" name="course_id" value={this.state.id} />
                        <div className="col-12 col-md-6">
                            <input type="text" onChange={(e => this.setState({rating: e.target.value}))} name="rating" placeholder="Enter Rating(0 to 5)" className="form-control" size="50" />
                        </div>
                        <div className="col-12 col-md-5">
                            <input type="text" onChange={(e => this.setState({review: e.target.value}))} name="review" placeholder="Enter Review" className="form-control" size="50" />
                        </div>
                        <div className="col-12 col-md-1">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    {/* students review */}
                    {(() =>{
                        if(this.state.comments != null){
                            return  (this.state.comments.map((comment) => (
                                <div className="row mt-4" key={comment[0]}>
                                    <h4><span style={{fontSize: '2em'}}><i className="fas fa-user-circle"></i></span> &nbsp;&nbsp;{comment[2]}</h4>
                                    <p>
                                    {(() => {
                                        switch (comment[3]) {
                                        case 1:   return <span style={{color: "red"}}><i className="fas fa-star"></i></span>;
                                        case 2: return <span style={{color: "red"}}><i className="fas fa-star"></i><i className="fas fa-star"></i></span>;
                                        case 3:  return <span style={{color: "red"}}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>;
                                        case 4: return <span style={{color: "red"}}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>;
                                        default: return <span style={{color: "red"}}><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>;
                                        }
                                    })()}
                                    </p>
                                    <p>{comment[4]}</p>
                                    <hr/>
                                </div>
                                )))
                        }else{
                            return "no rating yet"
                        }
                    })()}
                </div>
            </div>
            {/* footer */}
            <div className="container-fluid">
                <Footer/>
            </div>
        </div>
        )
    }
}

export default CourseDetail