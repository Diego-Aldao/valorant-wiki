import Descripciones from "./components/MainPage/Descripciones";
import ImagenesSectionAgentes from "./components/MainPage/ImagenesSectionAgentes";
import CustomMain from "./containers/custom-main";
import SectionAgentes from "./containers/pagina-inicio/section-agentes";
import HeroSection from "./containers/pagina-inicio/hero-section";
import SectionMapas from "./containers/pagina-inicio/section-mapas";
import MainButton from "./components/Buttons/MainButton";
import ImagenSectionMapas from "./components/MainPage/ImagenSectionMapas";
import SectionArmas from "./containers/pagina-inicio/section-armas";
import ImagenSectionArmas from "./components/MainPage/ImagenSectionArmas";

export default function Home() {
  return (
    <CustomMain>
      <HeroSection />
      <SectionAgentes>
        <ImagenesSectionAgentes />
        <Descripciones
          titulo="agentes"
          subtitulo="la creatividad es tu mejor arma"
          descripcion="Más que armas y balas, elegirás un agente armado con habilidades adaptativas, rápidas y letales que crean oportunidades para que tu juego de armas brille. No hay dos agentes que jueguen igual, así como no hay dos highlights que se vean iguales."
          button={
            <MainButton
              outsideStyles="border-main-white mt-5 ml-auto self-end justify-self-endx"
              insideStyles="bg-main-white text-main-black text-xs md:text-sm"
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
          descripcion="Cada mapa es un patio de recreo para mostrar tu creatividad. Diseñado específicamente para estrategias de equipo, jugadas espectaculares y momentos decisivos. Haz la jugada que otros imitarán por años."
          button={
            <MainButton
              outsideStyles="border-main-red mt-5 ml-auto justify-self-end"
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
          titulo="armas"
          subtitulo="pelea en todas partes del mundo"
          descripcion="Cada mapa es un patio de recreo para mostrar tu creatividad. Diseñado específicamente para estrategias de equipo, jugadas espectaculares y momentos decisivos. Haz la jugada que otros imitarán por años."
          customClases="text-main-black after:bg-main-black"
          button={
            <MainButton
              outsideStyles="border-main-black mt-5 ml-auto justify-self-end"
              insideStyles="bg-main-black text-main-white text-xs md:text-sm"
              nombre="ver todos los mapas"
              link="mapas"
            />
          }
        />
      </SectionArmas>
    </CustomMain>
  );
}
