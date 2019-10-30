import React, { Component } from 'react'
import './BackGroundHome.css'

export default class BackGroundHome extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videoURL: 'https://player.vimeo.com/external/136133426.mobile.mp4?s=43b99eded1ef81c25f2875455f5546f2e4750510&profile_id=116'
        }
    }
    render() {
        return (
            <div className = "containerHome">
                <video className = "background-video" loop autoPlay>
                    <source src={this.state.videoURL} type="video/mp4" />
                    <source src={this.state.videoURL} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }
}
