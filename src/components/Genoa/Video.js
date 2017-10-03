/*
import React, {Component} from "react";
import PropTypes from "prop-types";
import Genoa from "./___Genoa";
import "./Genoa.scss";

export default class Video extends Component {

    constructor(props) {
        super(props);
        this.player = new Genoa();
        this.containerClass = "video-container";
        this.playerContainerClass = "video_player_container";

        this.state = {
            segment: this.props.segment,
            related: null,
            sticky: this.props.sticky,
            offset: 0,
            isPlaying: false
        }
    }

    componentDidMount() {

        this.videoEventListener();

        this.setState({
            related: null
        });

        if (this.props.enableSticky) {
            window.addEventListener("scroll", this.scrollEvent);
            window.addEventListener("load", this.updateOffsetPosition);
            window.addEventListener("resize", this.updateOffsetPosition);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.contentId !== nextProps.contentId) {
            this.setState({
                segment: nextProps.segment,
                related: null,
                isPlaying: false,
                offset: 0
            }, () => {
                this.updateOffsetPosition();
            });
        }
    }

    render() {

        let stickyClassName = "";
        if (this.state.sticky) {
            stickyClassName = "video-sticky";
        }

        return (
            <div className={this.containerClass}>
                <div className={stickyClassName}>
                    {(this.state.related) ? this.state.related : null}
                    {this.player.getRender(this.props.contentId, this.state.segment, this.props.coverId, this.props.isMobile)}
                </div>
            </div>
        );
    }

    updateOffsetPosition = () => {

        const {
            top,
            height,
        } = document.getElementsByClassName(this.containerClass)[0].getBoundingClientRect();

        this.setState({
            offset: Math.floor(top + height - this.props.boundaryOffset + window.scrollY)
        });
    };

    setContentHeight = () => {

        if (this.state.sticky === false) {
            let playerContainerClass = document.getElementsByClassName(this.playerContainerClass)[0];
            let container = document.getElementsByClassName(this.containerClass)[0];

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
        if (isJson(e.data)) {
            const pass_data = JSON.parse(e.data);

            if (pass_data.action === "video_play") {
                this.setState({
                    isPlaying: true
                }, () => {
                    this.isSticky();
                });
            }
        }
    };

}

Video.propTypes = {
    contentId: PropTypes.number,
    coverId: PropTypes.number,
    content: PropTypes.object,
    sticky: PropTypes.bool,
    boundaryOffset: PropTypes.number
};

Video.defaultProps = {
    sticky: false,
    enableSticky: true,
    boundaryOffset: 55
};


function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}*/
