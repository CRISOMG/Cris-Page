import Head from "next/head";
import SocialIcons from "./SocialIcons";

function LandingV2() {
  const SkillCard = ({
    company,
    timeStart,
    timeEnd,
    timeTotal,
    description,
    skills,
  }) => {
    return (
      <div className="rounded-lg md:w-1/2 p-4  flex-col items-center bg-black/20 my-4">
        <p className="text-white md:text-lg  text-left">
          <span className="text-white underline list-disc decoration-green-500">
            <b>
              {company} ({timeTotal})
            </b>{" "}
            {timeStart} - {timeEnd}
          </span>
        </p>
        <p className="text-white md:text-lg  text-left">{description}</p>
        <br />
        <p className="text-white md:text-lg  text-left">Skills: {skills}</p>
      </div>
    );
  };

  // Freelance (3 meses)

  // Noviembre/2022 - Enero/2023

  // CRM de una plataforma de prestamos, Soporte y Desarrollo de
  // nuevas features en el Backend.

  // Skills: NestJS, MongoDB, Mongoose, PostgreSQL, TypeORM.
  // Foodwize (5 Meses)

  // Febrero/2022 - Junio/2022

  // Colaboraciones en el Frontend del Website, CMS v1 y CMS v2 de la
  // empresa.

  // Skills: React.js, Typescript, Redux, Material UI, SCRUM.
  // CobuilLab (4 Mese)

  // Septiembre/2021 -

  // Colaboraciones en el desarrollo frontend en proyectos de bajo
  // scope.

  // Skills: React.js, Typescript, Redux, Material UI, SCRUM, GraphQL.
  // Platzi (Siempre)

  // Agosto/2019 - Hasta la Actualidad

  // Completado más de 60 cursos y 3 rutas de aprendizaje en el área de
  // desarrollo web, habilidades blandas y emprendimiento.

  // puedes ver los certificados en mi perfil de platzi.

  const exp = [
    {
      company: "Freelance",
      timeStart: "Noviembre/2022",
      timeEnd: "Enero/2023",
      timeTotal: "3 meses",
      description:
        "CRM de una plataforma de prestamos, Soporte y Desarrollo de nuevas features en el Backend.",
      skills: "NestJS, MongoDB, Mongoose, PostgreSQL, TypeORM.",
    },
    {
      company: "CobuilLab",
      timeStart: "Septiembre/2021",
      timeEnd: "Diciembre/2021",
      timeTotal: "4 Meses",
      description:
        "Colaboraciones en el desarrollo frontend en proyectos de bajo scope.",
      skills: "React.js, Typescript, Redux, Material UI, SCRUM, GraphQL.",
    },
    {
      company: "Foodwize",
      timeStart: "Febrero/2022",
      timeEnd: "Junio/2022",
      timeTotal: "5 Meses",
      description:
        "Colaboraciones en el Frontend del Website, CMS v1 y CMS v2 de la empresa. ",
      skills: "React.js, Typescript, Redux, Material UI, SCRUM.",
    },
  ];

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
        {/* <hr className="snap-mandatorysnap-y snap-start" /> */}

        <section className="bg-gradient-to-b from-amber-400 to-amber-800">
          <section className="bg-black bg-opacity-75 flex flex-col justify-center items-center text-center p-4 min-h-screen">
            <div className="">
              <h2 className="_font-grand-hotel text-5xl text-amber-500">
                Cristian
              </h2>
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
              <h1 className="_font-grand-hotel text-5xl text-amber-500">
                FullStack Developer
              </h1>
              <div className="flex ml-4">
                <img
                  className="object-contain -mb-1"
                  width="25"
                  height="25"
                  src="/assets/platzi-icon.png"
                  alt="platzi logo"
                />
                <h2 className="_font-arial text-2xl pt-2 italic text-amber-500">
                  Platzi Eternal Student
                </h2>
              </div>
              <h3 className="_font-nova-round font-bold italic text-xl text-amber-500">
                Lifelong Learner
              </h3>
            </div>
            <SocialIcons />
          </section>
        </section>

        {/* <hr className="snap-y snap-proximity snap-align-none" /> */}

        <section className="bg-gradient-to-b from-blue-400 to-blue-600  ">
          <section className="bg-black bg-opacity-75 flex flex-col justify-center items-center text-center p-4 pb-20 min-h-screen">
            <div className="rounded-lg md:w-1/2 p-4  flex-col items-center bg-black/20 my-4">
              <h3 className="text-blue-500 md:text-4xl font-bold  text-left">
                Perfil Profesional
              </h3>
              <br />
              <p className="text-white md:text-lg  text-left">
                Experto con casi 3 años de experiencia en el manejo de
                tecnologías del ecosistema JavaScript­ principalmente con el
                Stack MERN y NextJS. He colaborado en 7 proyectos implementando
                las tecnologías acorde a las especificaciones, necesidades y
                modelo de negocio de la empresa, trabajando en equipo con
                metodologías y rutinas agiles como SCRUM y Kanban junto con
                buenas practicas SOLID y Clean Arquitectures con TypeScript. En
                mis rutinas suelo utilizar herramientas comunes como Figma,
                Notion, Trello y Postman.
              </p>
              <br />

              <p className="text-white md:text-lg  text-left">
                Aspiro a ser un Desarrollador Web FullStack con Node.js de alto
                rendimiento e impacto capaz de diseñar e implementar soluciones
                de software al mundo.
              </p>
              <br />
            </div>

            <div className="rounded-lg md:w-1/2 p-4  flex-col items-center bg-black/20 my-4">
              <h3 className="text-blue-500 md:text-4xl font-bold  text-left">
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
                impactando en un modelo de negocio que haga feliz a sus
                usuarios.
              </p>
              <br />
              <ul className="p-4">
                <li className="text-white underline list-disc decoration-blue-500 md:text-lg  text-left">
                  Interesado en cada etapa del proceso creativo para generar
                  ideas, con la informacion adecuada para la resolucion de
                  problemas. 🧠
                </li>

                <li className="text-white underline list-disc decoration-blue-500 md:text-lg  text-left">
                  Nociones de UI/UX con Figma. 🖌️
                </li>

                <li className="text-white underline list-disc decoration-blue-500 md:text-lg  text-left">
                  Entusiasta de la documentacion con Notion. 📝
                </li>

                <li className="text-white underline list-disc decoration-blue-500 md:text-lg  text-left">
                  Lifelong learner (autodidacta). 🥸
                </li>

                <li className="text-white underline list-disc decoration-blue-500 md:text-lg  text-left">
                  Experiencia con metodologias y flujos de trabajo como Scrum y
                  Kanban. 🧭
                </li>

                <li className="text-white underline list-disc decoration-blue-500 md:text-lg  text-left">
                  Proactivo, aplico mejoras de rendimiendo simpre que se pueda a
                  la rutina. 🔁
                </li>

                <li className="text-white underline list-disc decoration-blue-500 md:text-lg  text-left">
                  Comprometido con la ejecucion de tareas. prioridad a los
                  tiempos de entrega y ejecucion. 🕑
                </li>

                <li className="text-white underline list-disc decoration-blue-500 md:text-lg  text-left">
                  Multicultural, con valores muy acentuados y con buena actitud.
                  ✌️
                </li>
              </ul>
              {/* </q> */}

              {/* </blockquote> */}
            </div>
          </section>
        </section>

        {/* <hr className="snap-mandatorysnap-y snap-normal" /> */}

        <section className="bg-gradient-to-b from-green-400 to-green-600  ">
          <section className="bg-black bg-opacity-75 flex flex-col justify-center items-center text-center p-4 min-h-screen">
            <div className="rounded-lg md:w-1/2 p-4  flex-col items-center bg-black/20 my-4">
              <p className="text-white md:text-lg  text-left">
                <span className="text-white underline list-disc decoration-green-500">
                  <b>Back9 (1 año)</b> Junio/2022 - Actualidad
                </span>
              </p>
              <p className="text-white md:text-lg  text-left">
                Soporte en proyectos Frontend y Backend y Desarrollo de nuevas
                features. colaboracion en 6 proyectos de la agencia.
              </p>
              <br />
              <p className="text-white md:text-lg  text-left">
                Skills: React.js, Redux (RTK), Material UI, Nodejs, Expressjs,
                MongoDB, React Native, Tailwindcss, Arquitectura Multitenant.
              </p>
            </div>
            {exp.map((data) => (
              <SkillCard {...data} />
            ))}
          </section>
        </section>
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

export default LandingV2;
