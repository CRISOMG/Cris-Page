import Head from 'next/head';
import SocialIcons from '../containers/SocialIcons';

export default function Home() {
  return (
    <div className='bg-page'>
      <Head>
        <title>Cris Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center text-center p-4 min-h-screen'>
        <div className=''>
          <h1>Cristian</h1>
        </div>
        <div className='my-4'>
          <img
            className='mx-auto rounded-full w-64'
            src='/assets/cris-photo.jpg'
            alt='Cristian - Foto de perfil'
          />
        </div>
        <div className='mb-4'>
          <h1>Frontend Developer</h1>
          <h2>Platzi Eternal Student</h2>
          <h3 className='font-bold italic'>Nerver Stop Learner</h3>
        </div>
        <SocialIcons />
      </main>

      <style jsx>{`
        .bg-page {
          @apply bg-gradient-to-b from-yellow-400 to-orange-500;
        }
        h1,
        h2,
        h3 {
          margin: 0 auto;
        }
        h1 {
          @apply text-5xl;
          font-family: var(--grand-hotel);
        }
        h2 {
          font-family: Arial, Helvetica, sans-serif;
          @apply text-2xl pt-2 italic;
        }
        h3 {
          font-family: var(--nova-round);
          @apply text-xl;
        }
      `}</style>
    </div>
  );
}
