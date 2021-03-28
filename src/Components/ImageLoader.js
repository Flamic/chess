import { React, useState } from 'react'
import { Image } from 'react-bootstrap';
import './ImageLoader.css'

const videoFormats = [
    'mp4',
    'avi',
    'webm',
];

const imageFormats = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'webp'
];

export default function ImageLoader({url}) {
    const [media, setMedia] = useState();
    

    if (media === undefined)
    {
        let request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.addEventListener('readystatechange', function() {
            if ((request.readyState === 4) && (request.status === 200)) {
                setMedia(getHtmlMedia(JSON.parse(request.responseText).url));
            }
        });
        request.send();
    }

    return media ?? null
}

function getHtmlMedia(source) {
    let strings = source.split('.');
    let format = strings[strings.length - 1].toLowerCase();
    if (videoFormats.includes(format)) {
        return (<video src={source} className="media"></video>)
    }
    else if (imageFormats.includes(format)) {
        return (<Image src={source} className="media" alt="User avatar"/>)
    }
    else {
        return (<a href={source}>Image</a>)
    }
}

