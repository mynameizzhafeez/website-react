import { Link } from 'react-router-dom';

import '../SmallPreview.css';

import logos from '../../assets/logo-controller';

import MicroIcon from '../icon/MicroIcon';

function Merit(props) {
  return (
    <div className="preview">
      <div className="merit-title">
        <MicroIcon logo={logos[props.merit.img]} alt={props.merit.img}></MicroIcon>
        {
          props.merit.description &&
          <Link to={`../merits/${props.merit.kind}/${props.merit.key}`}>
            {props.merit.title}
          </Link>
        }
        {
          props.merit.link && props.merit.external && !props.merit.description &&
          <a href={props.merit.link}>
            {props.merit.title}
          </a> 
        }
        {
          props.merit.link && !props.merit.external &&
          <Link to={props.merit.link}>
            {props.merit.title}
          </Link> 
        }
        {
          props.merit.projects && !props.merit.description &&
          <Link to={`../works/projects/${props.merit.key}`}>
            {props.merit.title}
          </Link>
        }
        {
          !props.merit.link && !props.merit.projects && !props.merit.description &&
          props.merit.title
        }
        {props.merit.starred && <star> ★</star>}
      </div>
      <div className="merit-date">
        {props.merit.date} {/* {props.merit.lines && " ("+props.merit.lines+" lines)" } */}
      </div>
    </div>
  );
}

export default Merit;