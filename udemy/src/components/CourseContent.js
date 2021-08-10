import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'

export class CourseContent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content:[],
             contentDescription:[],
             id:this.props.id,
             details:[],
        }
    }

    componentDidMount = () =>{
        var url4 = `http://localhost:5000/courseContent/${this.state.id}`
            axios.get(url4).then((res) =>{
                if(res.data !== "none"){
                    this.setState({
                        content: res.data,
                    })
                    this.state.content.map((item) =>(
                        axios.get(`http://localhost:5000/courseContentDescription/${this.state.id}/${item[0]}`).then((res) =>{
                            this.setState({
                                contentDescription: [...this.state.contentDescription, res.data]
                            })
                        }).catch((err) =>{
                            console.log(err)
                        }) 

                    ))
                    
                }else{
                    this.setState({
                        content: null,
                    })
                }
            }).catch((err) =>{
                console.log(err)
            })
    }
    
    render() {
        return (
            <div className="coureseContent">
                <div className="container-fluid mt-3 text-start py-3 px-5" style={{background:'#e3f2fd'}}>
                <h3>Course Content</h3>

                <div className="accordion mt-3" id="accordionExample">
                {(() =>{
                    if(this.state.content != null){
                        return  (this.state.content.map((item) =>(
                            <div className="accordion-item" key={item[0]}>
                                <h2 className="accordion-header" id="headingOne">
                                <button style={{color:'white',background:'#90caf9'}} className="accordion-button text-white" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + item[0]} aria-expanded="true" aria-controls="collapseOne">
                                    {item[2]}
                                </button>
                                </h2>
                                
                                <div id={"collapse" + item[0]} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                          {this.state.contentDescription.map(data =>(
                                              data.map((something) =>(
                                                    (() =>{
                                                        if(item[0] === something[2]){
                                                            return (
                                                            <ul className="list-group" key={something[0]}>
                                                                <li className="list-group-item mt-3">{something[3]}</li>
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
                    }else{
                        return "nothing yet"
                    }
                })()}

                </div>
            </div>

            </div>
        )
    }
}

export default withRouter(CourseContent)