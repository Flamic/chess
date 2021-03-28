import React from 'react'
import { Table } from 'react-bootstrap'
import './ChessBoard.css'
import wp from '../Images/wp.png'
import wr from '../Images/wr.png'
import wn from '../Images/wn.png'
import wb from '../Images/wb.png'
import wq from '../Images/wq.png'
import wk from '../Images/wk.png'
import bp from '../Images/bp.png'
import br from '../Images/br.png'
import bn from '../Images/bn.png'
import bb from '../Images/bb.png'
import bq from '../Images/bq.png'
import bk from '../Images/bk.png'

const pieceType = {
    "wp" : wp,
    "wr" : wr,
    "wn" : wn,
    "wb" : wb,
    "wq" : wq,
    "wk" : wk,
    "bp" : bp,
    "br" : br,
    "bn" : bn,
    "bb" : bb,
    "bq" : bq,
    "bk" : bk
};

export default function ChessBoard({data}) {
    return (
        <Table className="chess-board" borderless>
            <ChessBoardHead inversed />
            {
                Array.from({ length: 8 }).map((ei, i) =>
                    <tr key={i}>
                    <th className="row-header">{i+1}</th>
                    {
                        Array.from({ length: 8 }).map((ej, j) => 
                            <td key={j}>
                            {
                                pieceToImage(data.piecesList.find(piece => piece.row === i+1 && piece.col === j+1))
                            }
                            </td>
                        )
                    }
                    <th className="row-header">{i+1}</th>
                    </tr>
                )
            }
            <ChessBoardHead inversed />
        </Table>
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

function pieceToImage(piece) {
    return piece
    ? (
        <img src={pieceType[piece.type]} alt='' />
    )
    : null
}