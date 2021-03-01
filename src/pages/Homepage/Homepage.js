import AppPreview from './AppPreview';

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
          imageLink="https://via.placeholder.com/64"
          title="Mock App"
          description="This is a mock application. I'm creating it to test to see if this media preview works correctly."
        />
      </main>
    </div>
  );
}

export default Homepage;
