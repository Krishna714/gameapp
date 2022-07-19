import React, {Component} from "react";

class gameShow extends Component{

    constructor(props){
        super(props);
        this.state({
            fd : props.fd,
            key:props.key
        })
    }
    
render(){
    return(
        <div>
            {
            this.state.fd.map((value, index) =>{
                return (
                    <div className="col-3">
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{value.platform}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">{value.score}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">{value.genre}</h6>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}
}



export default gameShow;