import React from 'react'

export const Footer = () => {
  return (

    <div>
    <div className='row'><h1 className="thai">Thai By Noo</h1>
    <div className='mediaikon'>
        <a href="https://www.facebook.com/Thaibynooodense" className="fa fa-facebook fa-2x" aria-hidden="true">
        </a>
        <a href="https://www.instagram.com/thaibynoo_odense/" FontAwesomeIcon icon={["fas", "coffee"]} className="fa fa-instagram  fa-2x" aria-hidden="true"> </a>
    </div>
    <div className='mediarow'>
    <div className='mediacolumn1'>Copyright</div>
    <div className='column1'>
        <p>Copyright</p>
        <p>Privatpolitik</p>

    </div>
    <div className='mediacolumn2'>+45 42 15 71 38 Store Gråbrødrestræde 11 5000 Odense C</div>

    <div className='column2'>
        <a href="https://www.facebook.com/Thaibynooodense" className="fa fa-facebook fa-2x" aria-hidden="true">
        </a>
        <a href="https://www.instagram.com/thaibynoo_odense/" className="fa fa-instagram  fa-2x" aria-hidden="true"> </a>
    </div>
    <div className='mediacolumn3'>Privatpolitik</div>
    <div className='column3'>
        <p>+45 42 15 71 38</p>
        <p>Store Gråbrødrestræde 11, 5000 Odense C</p>
        </div>
    </div></div></div>
  )
}
