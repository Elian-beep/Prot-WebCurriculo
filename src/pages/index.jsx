import Head from 'next/head'
import styles from '../../styles/Home.module.css';

import { FaGithub, FaEnvelope, FaAngellist, FaWhatsapp, FaBatteryEmpty, FaBatteryHalf, FaBatteryFull, FaTrophy } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='grid body-geral'>

      {/* ================================================================PRINCIPAL */}
      <div className='parent container'>

        <div className='profile--perfil flex'>
          <img src="/profile.jpg" alt="" />
        </div>

        {/* NOME E TRABALHO */}
        <div className='profile-name flex-resume'>
          <h1>ELIAN BATISTA</h1>
          <h2>FRONT END</h2>
        </div>

        {/* CONTATO */}
        <div className='contact-me flex-resume'>
          <h2>Contato</h2>
          <a href="https://elian.19batista@gmail.com"><i><FaEnvelope /> elian.19batista</i></a>
          <a href="https://basic-portfolio-delta.vercel.app/"><i><FaAngellist /> Meu Portifólio</i></a>
          <a href="https://github.com/Elian-beep"><i><FaGithub /> Elian Beep</i></a>
          <a href="https://api.whatsapp.com/send?phone=5592985878449&text=Ol%C3%A1%20Elian!"><i><FaWhatsapp /> (92) 98587-8449</i></a>
        </div>

        {/* HABILIDADES */}
        <div className='skills flex-resume'>
          <h2>Skills</h2>
          <p><FaBatteryFull /> HTML</p>
          <p><FaBatteryFull /> CSS</p>
          <p><FaBatteryFull /> Bootstrap 5</p>
          <p><FaBatteryHalf /> JavaScript</p>
          <p><FaBatteryEmpty /> ReacjJs</p>
          <p><FaBatteryEmpty /> NextJs</p>
        </div>

        {/* PRÊMIOS */}
        <div className='prizes flex-resume'>
          <h2>Prêmios</h2>
          <p><FaTrophy /> Torneio de Robótica com Arduino (2018)</p>
          <p><FaTrophy /> Maratona de Programação (2019)</p>
          <p><FaTrophy /> Maratona de Programação (2019)</p>
        </div>

        {/* Perfil */}
        <div className='profile'>

          <div className='about-me'>
            <h2>Sobre mim</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, delectus, sint enim quae architecto., quia suscipit quaerat corporis culpa quas est earum quis esse minus odit exercitationem? Vel, ex ratione.
            </p>
          </div>

          <div className='schooling'>
            <h2>Escolaridade</h2>
            <p>
              <h3>UEA - Itacoatiara</h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, delectus, sint enim quae architecto.
            </p>
            <p>
              <h3>IFAM - Parintins</h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, delectus, sint enim quae architecto.
            </p>
          </div>

          <div className='experience'>
            <h2>Experiências</h2>
            <p>
              <h3>CETAM (Itacoatiara-AM)</h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, delectus, sint enim quae architecto.
            </p>
            <p>
              <h3>Futuro Informática (Terra Santa-PA)</h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, delectus, sint enim quae architecto.
            </p>
            <p>
              <h3>PC informática (Parintins-AM)</h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, delectus, sint enim quae architecto.
            </p>

          </div>

        </div>

      </div>
    </div>
  )
}
