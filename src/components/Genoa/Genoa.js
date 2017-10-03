import React, {Component} from "react";
import PropTypes from "prop-types";
import Player from "./Player";
import "./Genoa.scss";

export default class Genoa extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sticky: false
        }
    }

    render() {
        return (
            <div className={this.props.containerVideoClass}>
                <div className={this.state.sticky ? this.props.stickyClassName : false}>
                    <Player
                        videoId={this.props.videoId}
                        host={this.props.host}
                        playerId={this.props.playerId}
                    />
                </div>
            </div>
        );
    }
}

Genoa.propTypes = {
    stickyClassName: PropTypes.string,
    containerVideoClass: PropTypes.string,
    host: PropTypes.string,
    playerId: PropTypes.number,
    videoId: PropTypes.number
};

Genoa.defaultProps = {
    stickyClassName: "video-sticky",
    containerVideoClass: "video-container",
    host: null,
    playerId: null,
    videoId: null
};