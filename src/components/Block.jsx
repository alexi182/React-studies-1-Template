import React, { Component } from 'react';

export default class Block extends React.Component {
   render() {
      return (
          <div>

             {/*  <div classNameName="modal-body">
              <h5>Popover in a modal</h5>
              <p>
              This <a href="#" role="button" classNameName="btn btn-secondary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.
              </p>
              <hr />
              <h5>Tooltips in a modal</h5>
              <p>
              <a href="#" classNameName="tooltip-test" title="Tooltip">This link</a> and
              <a href="#" classNameName="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.
              </p>
              </div>*/}

             <div classNameName="bd-example">
                <button type="button" classNameName="btn btn-primary" data-toggle="modal" data-target="#exampleModalPopovers">
                   Launch demo modal
                </button>
             </div>

             <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                   <div className="carousel-item active">
                      <img className="d-block w-100" src={'../img/1.jpg'} alt="First slide" />
                   </div>
                   <div className="carousel-item">
                      <img className="d-block w-100" src="..." alt="Second slide" />
                   </div>
                   <div className="carousel-item">
                      <img className="d-block w-100" src="..." alt="Third slide" />
                   </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                   <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                   <span className="carousel-control-next-icon" aria-hidden="true"></span>
                   <span className="sr-only">Next</span>
                </a>
             </div>
          </div>
      )
   }
}