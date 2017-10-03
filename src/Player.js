import React, {Component} from "react";
import PropTypes from "prop-types";

const BASE_PLAYER_NAME = "video_player_";

export class Player extends Component {

    render() {
        return(
            <figure className="video_player_container">
                <div className="video_player" id={this.randomPlayerId()}>
                    <iframe src={this.getSrc()} frameBorder={0} allowFullScreen={true} width="100%" height="100%" scrolling="no"/>
                </div>
            </figure>
        );
    }

    getSrc = () => {
        return `${this.props.host}/player/embed/playerId/${this.props.playerId}/contentId/${this.props.videoId}`;
    };

    randomPlayerId = () => {
        return BASE_PLAYER_NAME + new Date().getUTCMilliseconds();
    }

    //?pvast=kw_c13prog=${coverId}&kw_segmentos=${segment}
}

Player.propTypes = {
  host: PropTypes.string,
  playerId: PropTypes.string,
  videoId: PropTypes.number
};

Player.defaultProps = {
  host: "",
  playerId: null,
  videoId: null
};