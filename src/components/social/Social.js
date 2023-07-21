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
          <BsGithub />
        </a>
        <a href={linkedin} target='_blank' rel='noreferrer'>
          <BsLinkedin />
        </a>
        <a href='mailto:oneal.grant@outlook.com'>
          <BsEnvelopeFill />
        </a>
        <a href='tel:07886028826'>
          <BsPhoneFill />
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
