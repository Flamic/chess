import React from 'react'
import * as ExternalLinks from '../Data/ExternalLinks'
import { Carousel } from 'react-bootstrap'
import chess_board from '../Images/chess_board.jpg'
import chess_puzzles from '../Images/chess_puzzles.png'
import play_with_friends from '../Images/play_with_friends.jpg'
import './Slider.css'

export default function Slider() {
    return (
        <Carousel fade>
            <Carousel.Item className="carousel-item">
                <img
                    className="d-block w-100 align-self-center"
                    src={chess_board}
                    alt="Play chess"W
                />
            <Carousel.Caption>
                <a
                    href={ExternalLinks.CHESS_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="item-head"
                >
                    Play classic chess online!
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img
                className="d-block w-100"
                src={chess_puzzles}
                alt="Solve puzzle"
              />

              <Carousel.Caption>
                <a
                    href={ExternalLinks.PUZZLES_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="item-head"
                >
                    Take the challenge and solve interesting puzzles
                </a>
                <p className="item-text">
                    Learn from interactive lessons created by chess masters
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img
                className="d-block w-100"
                src={play_with_friends}
                alt="Play with friends"
              />
              <Carousel.Caption>
                <h3 className="item-head">Play with your friends and professional chess players</h3>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
