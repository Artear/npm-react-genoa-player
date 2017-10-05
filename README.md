# React Genoa Player

### Start

```
npm i --save react-genoa-player
```

### How to use

```javascript
import React, {Component} from 'react';
import Genoa from "react-genoa-player";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Genoa
                    host="https://api.vodgc.net"
                    playerId="7A6B981500560434"
                    videoId={148893}
                    options={
                        {
                            vast: "kw_213123",
                            segments: "1245123,5724343,621324313"
                        }
                    }
                />
            </div>
        )
    }
}
```

### Default Options

```
{
    enableSticky: false,
    stickyClassName: "video-sticky",
    containerVideoClass: "video-container",
    playerContainerClass: "video_player_container",
    host: null,
    playerId: null,
    videoId: null,
    boundaryOffset: 55,
    onPlay: () => null,
    onEnd: () => null,
    options: {}
}
```

### Basic CSS

```css
.video_player {
    height: 100%;
    width: 100%;
}

.video-sticky {
    position: fixed !important;
    bottom: 80px;
    right: 95px;
    width: 400px;
    height: 200px;
    z-index: 500;
    visibility: visible;
}

@media (min-width: 1024px) and (max-width: 1366px) {
    .video-sticky {
        right: 70px;
        bottom: 65px;
    }
}

@media (min-width: 1367px) and (max-width: 1600px) {
    .video-sticky {
        right: 80px;
        bottom: 60px;
    }
}
```
