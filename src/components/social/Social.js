// Styles
import './Social.css';

// Icons
import { BsLinkedin, BsGithub, BsPhoneFill, BsEnvelopeFill } from 'react-icons/bs';

const linkedin = 'https://www.linkedin.com/in/leightongrant/';
const github = 'https://github.com/leightongrant';

function Social() {
  return (
    <div className=''>
      <div className='social-links  d-inline-flex gap-2'>
        <a href={github} target='_blank' rel='noreferrer'>
          <BsGithub className="fs-3"/>
        </a>
        <a href={linkedin} target='_blank' rel='noreferrer'>
          <BsLinkedin className="fs-3" />
        </a>
        <a href='mailto:dev@leightongrant.me'>
          <BsEnvelopeFill className="fs-3" />
        </a>
        <a href='tel:+447886028826'>
          <BsPhoneFill className="fs-3" />
        </a>
      </div>
    </div>
  );
}

function LinkedIn() {
  return (
    <a href={linkedin} target='_blank' className='social-button' rel='noreferrer'>
      <BsLinkedin />
    </a>
  );
}

function GitHub() {
  return (
    <a href={github} target='_blank' className='social-button' rel='noreferrer'>
      <BsGithub />
    </a>
  );
}

export { Social, LinkedIn, GitHub };
