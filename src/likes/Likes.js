import React, {Component} from 'react';
import image1 from '../likes/l.jpg'
import image2 from '../likes/likes.png'
import image3 from '../likes/unlike.png'
import image4 from '../likes/love.png'


class Likes extends Component{
    state={
        likes: 0,
        Love: 0
    }
    increaseLikes=()=>{
        this.setState((prevState, prevPro)=>{
            return{
                likes:prevState.likes <5? prevState.likes+1: prevState.likes=5
            }
        })
    }
    ReduceLikes=()=>{
        this.setState((prevState, prevPro)=>{
            return{
                // likes:prevState.likes-1,
                likes:prevState.likes >=1? prevState.likes-1: prevState.likes=0
            }
        })  
    }
    Love=()=>{
        this.setState((prevState, prevPro)=>{
            return{
                // love:prevState.love-1,
                love:prevState.Love <5? prevState.Love+1: prevState.Love=5
            }
        })  
    }
    RestLikes=()=>{
        this.setState((prevState, prevPro)=>{
            return{
                likes:prevState.likes =0
            }
        })
    }
    render(){
        return(
            <center>
            <div>
            <h3>This is my likes and love add</h3>
            <img src={image1} height="300px" width="auto"></img>
            <h4>likes:{this.state.likes}</h4>
            <h4>Love:{this.state.Love}</h4>
            <img src={image2} onClick={this.increaseLikes} height="40px"></img> 
            <img src={image3} onClick={this.ReduceLikes} height="40px"></img> 
            <img src={image4} onClick={this.IncreaseLove} height="40px"></img> 
            <button onClick={this.RestLikes} height="40px"> Rest </button>
            </div>
            </center>
        );
    }   
}
export default Likes;