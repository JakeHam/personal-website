import { Media } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './style.css';

const AppPreview = ({ appLink, imageLink, title, description }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(appLink)
  }

  return (
    <div className="AppPreview" onClick={handleClick}>
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={imageLink}
          alt={title}
        />
        <Media.Body>
          <h4>{title}</h4>
          <p>{description}</p>
        </Media.Body>
      </Media>
    </div>
  );
}

export default AppPreview;
