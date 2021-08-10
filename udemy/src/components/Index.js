import React, { Component } from 'react'
import Header from './Header'
import Courses from './courses'
import BestCourses from './BestCourses'
import Footer from './Footer'

export class Index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'shivam',
             isAuthorised: 'true'
        }
    }

    componentDidMount = () =>{
        if(this.state.isAuthorised !== sessionStorage.getItem('isLogin')){
            this.props.history.push('/login');
        }else{
            
        }
    }
    
    render() {
        return (
            <div>
                <Header/>
                {/* carousel */} 
                <div className="container">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/img1.jpg" className="d-block w-100" alt="..." width="100%" height="400vh" />
                            </div>
                            <div className="carousel-item">
                                <img src="images/img2.jpg" className="d-block w-100" alt="..." width="100%" height="400vh" />
                            </div>
                            <div className="carousel-item">
                                <img src="images/img2.png" className="d-block w-100" alt="..." width="100%" height="400vh" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                </div> 
                
                {/* course categories */} 
                <div className="container-fluid">
                    <Courses/>
                </div>

                {/* success story */}
                <div className="container-fluid mt-5 mb-5" style={{borderTop:'1px solid rgba(0,0,0,0.1)', borderBottom:'1px solid rgba(0,0,0,0.1)'}}>
                    <div className="row">
                        <div className="col-12 col-md-6 py-5 px-5">
                            <img src="images/img4.jpg" width="100%" height="auto"  alt="..." />
                        </div>
                        <div className="col-12 col-md-6 py-5 px-5 mt-3">
                            <h3 style={{fontFamily:'Mate SC, serif'}}>Transform your life through education</h3>
                            <p className="mt-4 lead">Mohamad Alaloush launched a new career in software development by taking courses on Udemy. What will you be able to do?</p>
                        </div>
                    </div>
                </div>
                
                {/* Best courses */} 
                <div className="container-fluid">
                    <BestCourses/>
                </div>

                  {/*trusted by companies */}
                <div className="container-fluid py-5 mt-5" align="center"
                 style={{height:'30vh', borderTop:'1px solid rgba(0,0,0,0.1)'}}>
                    <h4 style={{fontFamily: 'Mate SC, serif'}}>Trusted by Companies of all sizes</h4>
                    <ul className="nav justify-content-center mt-4">
                        <li className="nav-item mx-3 lead"><i className="fab fa-blogger-b" style={{color:'grey'}}></i>&nbsp;Booking.com</li>
                        <li className="nav-item mx-3 lead"><i className="fas fa-underline" style={{color:'grey'}}></i>&nbsp;Udemy</li>
                        <li className="nav-item mx-3 lead"><i className="fab fa-adversal" style={{color:'grey'}}></i>&nbsp;Adversal</li>
                        <li className="nav-item mx-3 lead"><i className="fas fa-book" style={{color:'grey'}}></i>&nbsp;BestCourses</li>
                        <li className="nav-item mx-3 lead"><i className="fas fa-shoe-prints" style={{color:'grey'}}></i>&nbsp;Adidas</li>
                    </ul>
                </div>
                 
                {/* footer */}
                <div className="container-fluid">
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Index