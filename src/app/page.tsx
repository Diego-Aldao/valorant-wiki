import Descripciones from "../components/MainPage/Descripciones";
import ImagenesSectionAgentes from "../components/MainPage/ImagenesSectionAgentes";
import SectionAgentes from "../containers/pagina-inicio/section-agentes";
import HeroSection from "../containers/pagina-inicio/hero-section";
import SectionMapas from "../containers/pagina-inicio/section-mapas";
import MainButton from "../components/Buttons/MainButton";
import ImagenSectionMapas from "../components/MainPage/ImagenSectionMapas";
import SectionArmas from "../containers/pagina-inicio/section-armas";
import ImagenSectionArmas from "../components/MainPage/ImagenSectionArmas";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <SectionAgentes>
        <ImagenesSectionAgentes />
        <Descripciones
          titulo="agentes"
          subtitulo="la creatividad es tu mejor arma"
          descripcion="Más que armas y balas, podrás elegir un agente armado con habilidades adaptativas, rápidas y letales que crean oportunidades para que tu juego de armas brille. Ningun agente se jugará igual, ni ningun highlight se vera igual."
          customClases="after:bg-main-white"
          button={
            <MainButton
              outsideStyles="border-main-white mt-5 ml-auto after:bg-main-red before:bg-main-red"
              insideStyles="bg-main-white text-main-black text-xs md:text-sm after:bg-secondary-white"
              nombre="ver todos los agentes"
              link="agentes"
            />
          }
        />
      </SectionAgentes>
      <SectionMapas>
        <Descripciones
          titulo="mapas"
          subtitulo="pelea en todas partes del mundo"
          descripcion="Cada mapa es un campo de batalla para mostrar tu creatividad. Diseñados específicamente para estrategias de equipo, jugadas espectaculares y momentos decisivos. Haz la jugada que otros imitarán en el futuro."
          customClases="after:bg-main-white"
          button={
            <MainButton
              outsideStyles="border-main-red mt-5 ml-auto"
              insideStyles="bg-main-red text-main-white text-xs md:text-sm"
              nombre="ver todos los mapas"
              link="mapas"
            />
          }
        />
        <ImagenSectionMapas />
      </SectionMapas>
      <SectionArmas>
        <ImagenSectionArmas />
        <Descripciones
          titulo="arsenal"
          subtitulo="complementa tu estilo de juego"
          descripcion="Desde armas ligeras y versatiles a maravillas feroces. Encuentra la compañera ideal con la que compartirás tu gloria y llevarás a la ruina al enemigo. Y por supuesto, nunca olvides el cuchillo tactico para soluciones intimas."
          customClases="text-main-black after:bg-main-black"
          button={
            <MainButton
              outsideStyles="border-main-black mt-5 ml-auto after:bg-main-white before:bg-main-white"
              insideStyles="bg-main-black text-main-white text-xs md:text-sm after:bg-main-red"
              nombre="ver todas las armas"
              link="armas"
            />
          }
        />
      </SectionArmas>
    </main>
  );
}
