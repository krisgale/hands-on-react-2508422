import { useState } from 'react';

export default () => {
  const [ count, setCount ] = useState( 0 );
  return <button className="outline" onClick={ () => setCount( count + 1 ) }>
    { 0 == count ? 'Not clicked yet...'
      : ( 1 == count ? 'Clicked once.'
        : `Clicked ${ count } times!` )
    }
  </button>;
}
