import { useState, useEffect } from 'react';
const pageTitle = document.title;

export default () => {
  const [ count, setCount ] = useState( 0 );
  useEffect( () => {
    count && ( document.title = `${ pageTitle } -- ${ count }` );
  } );
  return <button className="outline" onClick={ () => setCount( count + 1 ) }>
    { 0 == count ? 'Not clicked yet...'
      : ( 1 == count ? 'Clicked once.'
        : `Clicked ${ count } times!` )
    }
  </button>;
}