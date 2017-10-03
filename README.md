# React Genoa Player

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
