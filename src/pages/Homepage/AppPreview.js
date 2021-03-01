import { Media } from 'react-bootstrap';
import './AppPreview.css';

const AppPreview = ({ imageLink, title, description }) => {
  return (
    <div className="AppPreview">
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
