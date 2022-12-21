import { Parallax } from 'react-parallax';
const image1 =
  'https://stillmed.olympics.com/media/Images/OlympicOrg/News/2017/04/11/2017-04-11-Volleyball-thumbnail.jpg?interpolation=lanczos-none&resize=2120:1200';

const Parallax1 = () => (
  <Parallax className="image" bgImage={image1} strength={600}>
    <div className="content text-center">
      <span className="img-txt display-1 fw-bold  text-light ">
        Competitions

      </span>
    </div>
  </Parallax>
);
export default Parallax1;
