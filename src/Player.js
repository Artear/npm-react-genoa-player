import React, {Component} from "react";
import PropTypes from "prop-types";

const BASE_PLAYER_NAME = "video_player_";

export class Player extends Component {

    render() {
        return (
            <figure className="video_player_container">
                <div className="video_player" id={this.randomPlayerId()}>
                    <iframe title="player" src={this.getSrc()} frameBorder={0} allowFullScreen={true} width="100%" height="100%"
                            scrolling="no"/>
                </div>
            </figure>
        );
    }

    getSrc = () => {
        const options = this.parseOptionsToQueryString();
        return `${this.props.host}/player/v2/embed/playerId/${this.props.playerId}/contentId/${this.props.videoId}?${options}`;
    };

    randomPlayerId = () => {
        return BASE_PLAYER_NAME + new Date().getUTCMilliseconds();
    };

    parseOptionsToQueryString = () => {
        return Object
            .keys(this.props.options)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(this.props.options[key])}`)
            .join('&');
    }
}

Player.propTypes = {
    host: PropTypes.string,
    playerId: PropTypes.string,
    videoId: PropTypes.number,
    options: PropTypes.object
};

Player.defaultProps = {
    host: "",
    playerId: null,
    videoId: null,
    options: {}
};
