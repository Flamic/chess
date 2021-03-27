import React from 'react'
import './ChessBoard.css'

export default function ChessBoard() {
    return (
        <table className="chess-board">
            <ChessBoardHead inversed />
            {Array.from({ length: 8 }).map((e, i) => (<ChessBoardRow index={i + 1} />))}
            <ChessBoardHead inversed />
        </table>
    )
}

function ChessBoardRow({index}) {
    return (
        <tr key={index}>
            <th className="row-header">{index}</th>
            {Array.from({ length: 8 }).map((e, i) => (<td key={i}></td>))}
            <th className="row-header">{index}</th>
        </tr>
    )
}

function ChessBoardHead({inversed = false}) {
    let ch = {
        character: (inversed ? 'H' : 'A')
    }

    return (
    <tr>
        <th></th>
        {
            Array.from({ length: 8 }).map((e, i) => (
                <th key={i} className="col-header">
                    {inversed ? prevChar(ch) : nextChar(ch)}
                </th>
            ))
        }
        <th></th>
    </tr>
    )
}

function nextChar(obj) {
    let lastCh = obj.character;
    obj.character = String.fromCharCode(obj.character.charCodeAt(0)+1);
    return lastCh;
}

function prevChar(obj) {
    let lastCh = obj.character;
    obj.character = String.fromCharCode(obj.character.charCodeAt(0)-1);
    return lastCh;
}