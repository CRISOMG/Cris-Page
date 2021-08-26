import { GithubIcon, TwitterIcon, PlatziIcon, LinkedinIcon } from '../components/svg-icons';

export default function SocialIcons() {
  return (
    <div className='flex justify-around items-center mx-auto w-full max-w-sm h-32 '>
      <a href='https://twitter.com/_crisomg' target='_blank' rel='noopener noreferrer'>
        <TwitterIcon />
      </a>
      <a href='https://platzi.com/@CrisOMG/' target='_blank' rel='noopener noreferrer'>
        <PlatziIcon />
      </a>
      <a href='https://github.com/CRISOMG' target='_blank' rel='noopener noreferrer'>
        <GithubIcon />
      </a>
      <a href='https://linkedin.com/in/crisomg/' target='_blank' rel='noopener noreferrer'>
        <LinkedinIcon />
      </a>
    </div>
  );
}
