import React from 'react';

export const Block = (props) =>


    <div>
       {console.log(props.data2.age)};
       <p>{props.data}</p>
       <p>{props.data2.age}</p>
       <p>{props.data2.sex}</p>

       {/*<div>{props.data2.map(function(item, index) {
              return (
                  <div key={index}>
                     <span>{item.age}</span>
                     <span>{item.sex}</span>
                  </div>
              )
           }
       )}
       </div>*/}

    </div>;