import React, {Component} from "react";
import PropTypes from "prop-types";
import {Player} from "./Player";

const VIDEO_ON_PLAY = "video_play";
const VIDEO_ON_END = "video_end";

export default class Genoa extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sticky: this.props.sticky,
            offset: 0,
            isPlaying: false
        }
    }

    render() {
        return (
            <div className={this.props.containerVideoClass}>
                <div className={this.state.sticky ? this.props.stickyClassName : ""}>
                    <Player
                        videoId={this.props.videoId}
                        host={this.props.host}
                        playerId={this.props.playerId}
                        options={this.props.options}
                    />
                </div>
            </div>
        );
    }

    componentDidMount() {

        this.videoEventListener();

        if (this.props.enableSticky) {
            window.addEventListener("scroll", this.scrollEvent);
            window.addEventListener("load", this.updateOffsetPosition);
            window.addEventListener("resize", this.updateOffsetPosition);
        }
    }

    updateOffsetPosition = () => {

        const {
            top,
            height,
        } = document.getElementsByClassName(this.props.containerVideoClass)[0].getBoundingClientRect();

        this.setState({
            offset: Math.floor(top + height - this.props.boundaryOffset + window.scrollY)
        });
    };

    setContentHeight = () => {

        if (this.state.sticky === false) {
            let playerContainerClass = document.getElementsByClassName(this.props.playerContainerClass)[0];
            let container = document.getElementsByClassName(this.props.containerVideoClass)[0];

            if (!!playerContainerClass && !!container) {
                let currentHeight = parseFloat(playerContainerClass.getBoundingClientRect().height.toFixed(2));

                if (currentHeight !== container.style.height) {
                    container.style.height = currentHeight;
                }
            }
        }
    };

    scrollEvent = (e) => {
        this.isSticky();
    };

    isSticky() {

        if (this.props.enableSticky) {

            this.setContentHeight();

            if (window.scrollY > this.state.offset && this.state.isPlaying) {
                this.setState({
                    sticky: true
                });
            } else {
                this.setState({
                    sticky: false
                });
            }
        }
    }

    videoEventListener = () => {
        if (typeof window !== "undefined") {
            window.onmessage = this.onMessageEvent;
        }
    };

    onMessageEvent = (e) => {
        if (this.isJson(e.data)) {
            const pass_data = JSON.parse(e.data);

            if (pass_data.action === VIDEO_ON_PLAY) {
                this.onPlay();
            }

            if (pass_data.action === VIDEO_ON_END) {
                this.onEnd();
            }
        }
    };

    onPlay = () => {
        this.props.onPlay();

        this.setState({
            isPlaying: true
        }, () => {
            this.isSticky();
        });
    };

    onEnd = () => {
        this.props.onEnd();
    };

    isJson = (str) => {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
}

Genoa.propTypes = {
    enableSticky: PropTypes.bool,
    stickyClassName: PropTypes.string,
    containerVideoClass: PropTypes.string,
    host: PropTypes.string,
    playerId: PropTypes.string,
    videoId: PropTypes.number,
    options: PropTypes.object,
    onPlay: PropTypes.func,
    onEnd: PropTypes.func
};

Genoa.defaultProps = {
    enableSticky: false,
    stickyClassName: "video-sticky",
    containerVideoClass: "video-container",
    playerContainerClass: "video_player_container",
    host: null,
    playerId: null,
    videoId: null,
    boundaryOffset: 55,
    sticky: false,
    options: {},
    onPlay: () => null,
    onEnd: () => null
};