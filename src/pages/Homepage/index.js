import AppPreview from './AppPreview';
import pkmnLogo from './images/pkmn_card_gen.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = () => {
  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <h1>Jake Hamel</h1>
        <h2><i>Web Developer</i></h2>
      </header>
      <hr />
      <main>
        <h3>My Apps</h3>
        <AppPreview
          appLink='/pkmn'
          imageLink={pkmnLogo}
          title="Pokemon Card Generator"
          description="A quick little Pokémon card generator."
        />
      </main>
    </div>
  );
}

export default Homepage;
