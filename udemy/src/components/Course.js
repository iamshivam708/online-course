import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'

class Course extends Component {
    constructor(props) {
        super(props)

        this.state = {
            content: [],
            contentDescription: [],
            isAuthorised: 'true',
            id: this.props.match.params.id,
            details: [],
            description: []
        }
    }

    componentDidMount = () => {
        if (this.state.isAuthorised !== sessionStorage.getItem('isLogin')) {
            this.props.history.push('/login');
        } else {
            var url4 = `http://localhost:5000/courseContent/${this.state.id}`
            axios.get(url4).then((res) => {
                if (res.data !== "none") {
                    this.setState({
                        content: res.data,
                    })
                    this.state.content.map((item) => (
                        axios.get(`http://localhost:5000/courseContentDescription/${this.state.id}/${item[0]}`).then((res) => {
                            this.setState({
                                contentDescription: [...this.state.contentDescription, res.data]
                            })
                        }).catch((err) => {
                            console.log(err)
                        })

                    ))

                } else {
                    this.setState({
                        content: null,
                    })
                }
            }).catch((err) => {
                console.log(err)
            })

            // eslint-disable-next-line
            {/* getting course description for single course */ }
            var url5 = `http://localhost:5000/courseDescription/${this.state.id}`
            axios.get(url5).then((res) => {
                if (res.data !== 'none') {
                    this.setState({
                        description: res.data,
                    })
                } else {
                    this.setState({
                        description: null,
                    })
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    handleClick(name) {
        document.getElementById('mainVideo').src = name + "?autoplay=1"
    }

    render() {
        return (
            <div className="Course">
                <Header />

                <div className="container-fluid py-3 px-5">
                    <h3 className="mt-2 text-center" style={{ fontFamily: 'Mate SC, serif' }}><b>Code Your First Web application Using ReactJs</b></h3>
                    <div className="row">

                        <div className="col-12 col-md-8 mt-3 px-3 py-3" style={{ background: '#e3f2fd' }}>
                            {/* video */}
                            <iframe
                                allowfullscreen="allowfullscreen"
                                mozallowfullscreen="mozallowfullscreen"
                                msallowfullscreen="msallowfullscreen"
                                oallowfullscreen="oallowfullscreen"
                                webkitallowfullscreen="webkitallowfullscreen"
                                width="100%" height="400px"
                                src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1" title="great" id="mainVideo">
                            </iframe>

                            {/*Course Description */}
                            <div className="container mt-4">
                                <div className="row">
                                    <div className="col-12 justify-content-center mb-4">
                                        <div className="container-fluid mt-3 px-5 py-5" style={{ backgroundColor: '#fafafa' }} >
                                            <h3 style={{ fontFamily: 'Mate SC, serif' }}>Course Description</h3>
                                            <div className="row mt-3">
                                                <div className="col-12" >
                                                    <blockquote>{this.state.description[2]}</blockquote>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                         {/* course content */}
                        <div className="col-12 col-md-4">
                            <div className="container-fluid mt-3 text-start py-3 px-5" style={{ background: '#e3f2fd' }}>
                                <h3>Course Content</h3>

                                <div className="accordion mt-3" id="accordionExample">
                                    {(() => {
                                        if (this.state.content != null) {
                                            return (this.state.content.map((item) => (
                                                <div className="accordion-item" key={item[0]}>
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button style={{ color: 'white', background: '#90caf9' }} className="accordion-button text-white" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + item[0]} aria-expanded="true" aria-controls="collapseOne">
                                                            {item[2]}
                                                        </button>
                                                    </h2>

                                                    <div id={"collapse" + item[0]} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            {this.state.contentDescription.map(data => (
                                                                data.map((something) => (
                                                                    (() => {
                                                                        if (item[0] === something[2]) {
                                                                            return (
                                                                                <ul className="list-group" key={something[0]}>
                                                                                    <li style={{cursor:'pointer'}} className="list-group-item mt-3" onClick={() => this.handleClick(something[4])}>{something[3]}</li>
                                                                                </ul>
                                                                            )
                                                                        }
                                                                    })()
                                                                ))
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )))
                                        } else {
                                            return "nothing yet"
                                        }
                                    })()}

                                </div>
                            </div>
                        
                            <div className="container mt-4 py-3 px-5" style={{ background: '#e3f2fd' }}>
                                <h3>Get All notes here</h3>
                                <a href="www.gihub.com" style={{textDecoration:'none'}}>Get Notes + full playlist content</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container-fluid mt-4">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Course