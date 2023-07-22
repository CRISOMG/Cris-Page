import Head from "next/head";
import SocialIcons from "../containers/SocialIcons";

function LandingV1() {
  return (
    <div className="">
      <Head>
        <title>Cris Page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          key="title"
          name="title"
          content="Cristian Caraballo - Frontend Developer with React.js | Next.js "
        />
        <meta
          key="description"
          name="description"
          content="Desarrollador de Aplicaciones FullStack MERN | Next.js | Nest.js. Tecnologías/Metodologías: MERN & JAM Stack. visita mi pagina para saber más..."
        />

        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:url"
          property="og:url"
          content="https://cris-page.vercel.app/"
        />
        <meta
          key="og:title"
          property="og:title"
          content="Cristian Caraballo - FullStack MERN | Next.js | Nest.js "
        />
        <meta
          key="og:description"
          property="og:description"
          content="Desarrollador de Aplicaciones FullStack MERN | Next.js | Nest.js. Tecnologías/Metodologías: MERN & JAM Stack. visita mi pagina para saber más..."
        />
        <meta
          key="og:image"
          property="og:image"
          content="https://cris-page.vercel.app/assets/meta-image.png"
        />

        <meta
          key="twitter:card"
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          key="twitter:url"
          property="twitter:url"
          content="https://cris-page.vercel.app/"
        />
        <meta
          key="twitter:title"
          property="twitter:title"
          content="Cristian Caraballo - FullStack MERN | Next.js | Nest.js "
        />
        <meta
          key="twitter:description"
          property="twitter:description"
          content="Desarrollador de Aplicaciones FullStack MERN | Next.js | Nest.js. Tecnologías/Metodologías: MERN & JAM Stack. visita mi pagina para saber más..."
        />
        <meta
          key="twitter:image"
          property="twitter:image"
          content="https://cris-page.vercel.app/assets/meta-image.jpg"
        />
      </Head>
      <main className="overflow-y-auto snap-mandatory snap-y max-h-screen scroll-smooth">
        <hr className="snap-mandatorysnap-y snap-start" />

        <section className=" cris-main-bg-section flex flex-col justify-center items-center text-center p-4 min-h-screen">
          <div className="">
            <h2 className="_font-grand-hotel text-5xl">Cristian</h2>
          </div>
          <div className="my-4">
            <img
              width="240"
              height="240"
              className="mx-auto rounded-full w-60"
              src="/assets/cris-photo.jpg"
              alt="Cristian - Foto de perfil"
            />
          </div>
          <div className="text-center mb-4">
            <h1 className="_font-grand-hotel text-5xl">Javascript Developer</h1>
            <div className="flex ml-4">
              <img
                className="object-contain -mb-1"
                width="25"
                height="25"
                src="/assets/platzi-icon.png"
                alt="platzi logo"
              />
              <h2 className="_font-arial text-2xl pt-2 italic">
                Platzi Eternal Student
              </h2>
            </div>
            <h3 className="_font-nova-round font-bold italic text-xl ">
              Lifelong Learner
            </h3>
          </div>
          <SocialIcons />
        </section>

        <hr className="snap-mandatorysnap-y snap-start" />

        <section className="bg-gradient-to-b from-blue-400 to-blue-600  flex flex-col justify-center items-center text-center p-4 min-h-screen">
          <div className="rounded-lg md:w-1/2 p-4  flex-col items-center bg-black/20">
            <h3 className="text-amber-300 md:text-4xl font-bold  text-left">
              Perfil Profesional
            </h3>
            <br />
            <p className="text-white md:text-lg  text-left">
              Experto con casi 3 años de experiencia en el manejo de tecnologías
              del ecosistema JavaScript­ principalmente con el Stack MERN y
              NextJS. He colaborado en 7 proyectos implementando las tecnologías
              acorde a las especificaciones, necesidades y modelo de negocio de
              la empresa, trabajando en equipo con metodologías y rutinas agiles
              como SCRUM y Kanban junto con buenas practicas SOLID y Clean
              Arquitectures con TypeScript. En mis rutinas suelo utilizar
              herramientas comunes como Figma, Notion, Trello y Postman.
            </p>
            <br />

            <p className="text-white md:text-lg  text-left">
              Aspiro a ser un Desarrollador Web FullStack con Node.js de alto
              rendimiento e impacto capaz de diseñar e implementar soluciones de
              software al mundo.
            </p>
            <br />
            <h3 className="text-amber-300 md:text-4xl font-bold  text-left">
              Cualidades y Aptitudes
            </h3>
            <br />
            {/* <blockquote className="rounded-lg bg-gray-50/80 p-2 text-gray-600 font-medium md:text-lg  text-left"> */}
            {/* <q> */}
            <p className="text-white md:text-lg  text-left">
              Entusiasta de la transfomacion digital, programador de codigo
              limpio y organizado, amante de las implementaciones de software
              creativas, agil en iteraciones y entrega. Mi competencia; mis
              habilidades para crear soluciones con las tecnologias actuales
              impactando en un modelo de negocio que haga feliz a sus usuarios.
            </p>
            {/* </q> */}

            {/* </blockquote> */}
          </div>
        </section>

        <hr className="snap-mandatorysnap-y snap-start" />

        <section className="bg-gradient-to-b from-green-400 to-green-600  flex flex-col justify-center items-center text-center p-4 min-h-screen"></section>
      </main>
      <style jsx>{`
        ._font-grand-hotel {
          font-family: var(--grand-hotel);
        }
        ._font-arial {
          font-family: Arial, Helvetica, sans-serif;
        }
        ._font-nova-round {
          font-family: var(--nova-round);
        }
      `}</style>
    </div>
  );
}

export { LandingV1 };
