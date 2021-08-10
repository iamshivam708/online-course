import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <Header/>
                {/* main */}
                <div className="container px-5 py-5" style={{boxShadow:'5px 5px 10px 5px #e0f7fa'}}>
                    <div className="row">
                        <div className="col-6 mt-5" align="center"> 
                           <h1 style={{color:"#00acc1",fontFamily: 'Mate SC, serif'}}>Improving Lives Through Learning</h1>
                           <h4 className="mt-5">By connecting students all over the world to the best instructors, Udemy is helping individuals reach their goals and pursue their dreams.</h4>
                        </div>
                        <div className="col-6">
                            <img src="/images/about.jpg" width="100%" alt="..." />
                        </div>
                    </div>
                </div>

                {/* stats */}
                <div className="container-fluid mt-5 px-5 py-5" 
                style={{background:'#e0f7fa'}}>
                   <div className="row px-4 py-4 text-center">
                       <h1 style={{fontFamily: 'Mate SC, serif',color:"#00acc1"}}>Our global reach</h1>
                       <p className="lead mt-3">Udemy is a leading global marketplace for teaching and learning, 
                           connecting <br/> millions of students to the skills they need to succeed. Udemy as of December <br/>  2020:</p>
                    </div> 
                    <div className="row px-5 py-5" align="center">
                        <div className="col-3">
                            <h1 style={{color:"#00acc1"}}>40M</h1>
                            <p className="lead">Learners</p>
                        </div>
                        <div className="col-3">
                            <h1 style={{color:"#00acc1"}}>65+</h1>
                            <p className="lead">Languages</p>
                        </div>
                        <div className="col-3">
                            <h1 style={{color:"#00acc1"}}>155k</h1>
                            <p className="lead">Courses</p>
                        </div>
                        <div className="col-3">
                            <h1 style={{color:"#00acc1"}}>480M</h1>
                            <p className="lead">Course enrollments</p>
                        </div>
                    </div>
                </div>

                {/* main content */}
                <div className="container-fluid" style={{background:"#006064"}}>
                    <div className="row">
                        <div className="col-6 p-2">
                            <img src="/images/img1.jpg" alt="..." height="400vh" width="100%" />
                        </div>
                        <div className="col-6 px-4 py-4 mt-5" align="center">
                            <h3 className="mt-5" style={{fontFamily: 'Mate SC, serif',color:"#f0f4c3"}}>Staying ahead of the future of work</h3>
                            <p className="lead mt-3 text-white">Udemy helps organizations prepare for the ever-evolving future of work. Our curated collection of top-rated business and technical courses gives companies, governments,
                                 and nonprofits the power to develop in-house expertise and satisfy employees’ hunger for learning and development.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 px-4 py-4 mt-5" align="center">
                            <h3 className="mt-5" style={{fontFamily: 'Mate SC, serif',color:"#f0f4c3"}}>Our Begginnings</h3>
                            <p className="lead mt-3 text-white">As a child in a Turkish village, Udemy’s founder saw first-hand what’s possible when learning is within reach.
                                 Shivam Agarwal found opportunities online and was inspired to help others do the same.</p>
                        </div>
                        <div className="col-6 p-2">
                            <img src="/images/img2.jpg" alt="..." height="400vh" width="100%" />
                        </div>
                    </div>
                </div>

                {/* Our instructor */}
                <div className="container-fluid mt-5 px-5 py-5 mb-5" style={{background:'#e0f7fa'}}>
                   <div className="row px-4 py-4 text-center">
                       <h1 style={{fontFamily: 'Mate SC, serif',color:"#00acc1"}}>Our Instructors</h1>
                       <p className="lead mt-3">Udemy instructors are passionate about sharing their knowledge and helping students. <br/>
                       They’re experts who stay active in their fields in order to deliver <br/>up-to-date content.</p>
                    </div> 
                    <div className="row px-5 py-5" align="center">
                        <div className="col-4">
                            <img src="/images/mikey.png" height="300vh" width="100%" alt="..." />
                            <p className="lead">Mikey revengers</p>
                        </div>
                        <div className="col-4">
                            <img src="/images/pain.jpg" height="300vh" width="100%" alt="..." />
                            <p className="lead">Pain uzumaki</p>
                        </div>
                        <div className="col-4">
                            <img src="/images/yuno.jpg" height="300vh" width="100%" alt="..." />
                            <p className="lead">Gasai yuno</p>
                        </div>
                    </div>
                </div>

                {/* follow  */}
                <div className="container-fluid p-3" align="center" style={{borderTop:'1px solid rgba(0,0,0,0.1)'}}>
                    <h3 style={{fontFamily: 'Mate SC, serif'}}>
                        Follow Us &nbsp;&nbsp;
                        <span style={{fontSize:'2rem',color:"blue"}}><i className="fab fa-facebook-square"></i></span> &nbsp;&nbsp;
                        <span style={{fontSize:'2rem',color:"#e65100"}}><i className="fab fa-reddit-square"></i></span> &nbsp;&nbsp;
                        <span style={{fontSize:'2rem',color:"#4fc3f7"}}><i className="fab fa-twitter-square"></i></span> &nbsp;&nbsp; 
                        <span style={{fontSize:'2rem',color:"red"}}><i className="fab fa-instagram-square"></i></span>
                    </h3>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default About