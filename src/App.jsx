import Welcome from './components/Welcome';
import Click from './components/Click';

function App() {
  const name = 'StarGazers';
  const nameStyle = { 'color': 'SteelBlue' };
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="{ name } Group" />
          <Welcome name={ name } style={ nameStyle } />
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <Click />
        </hgroup>
      </article>
    </div>
  )
}

export default App;
