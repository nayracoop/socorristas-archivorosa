import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Container = styled.article`
    padding: 3em 25px;
  `

const Header = styled.header`
    padding: 3em 25px;
  `
const Footer = styled.header`
    padding: 3em 25px;
  `



class App extends Component {

  render() {
    return (
      <Container className="App">
        <Header>
          <p>28 de mayo de 2005 - 28 de mayo 2019</p>
          <h1>La buena noticia</h1>
        </Header>
        <p>En el mes de mayo de 2005, unas 70 activistas de numerosas organizaciones nos dimos cita en la ciudad de Córdoba para poner en marcha lo acordado en la Asamblea por el Derecho al Aborto realizada en el por entonces “Encuentro Nacional de Mujeres” desarrollado en Rosario en 2003. Acordamos la construcción de la Campaña Nacional por el Derecho al Aborto Legal. Lanzarla el 28 de mayo de 2005 con la juntada de firmas. Algunas colectivas y organizaciones feministas tenemos muchos recuerdos de ese tiempo que parece tan lejano. Son parte de nuestro capital genealógico y activista.</p>
        <p>Tanto pasó. Tanto en estos 14 años, aunque todo empezó mucho antes sin lugar a dudas. ¡Tanto! Tanto para llegar a lo vivenciado en 2018 y para seguir persistiendo en 2019. Amasado con la paciencia de quien sabe que los reclamos son justos y que este derecho lo conquistaremos en las calles, en las casas, en las mesas familiares, en las universidades y escuelas, en sindicatos, en clubes y en centros de salud y en hospitales antes que en el Congreso Nacional donde se enquista la crueldad rancia y conservadora del Senado.</p>
        <p>Por octava vez, con las energías y los afectos recargados, este 28 de mayo presentaremos el nuevo texto del Proyecto de Ley de IVE en el Congreso Nacional. La gran diferencia, un movimiento que vino para quedarse y que se contornea verde y orgulloso diariamente en las mochilas de miles y miles y en muchos muchos muchos otros espacios.</p>
        <p><strong>Me atrapa esta gran ocasión para para darnos y recordarnos una buena noticia</strong>, entre las muchas buenas noticias que podríamos destacar de todo este tiempo andando. Elijo darnos una. Mi intención es política (obvio).</p>
        <p><strong>La buena noticia es tenernos. Sentir que nos tenemos. Palpar diariamente los acuerpamientos.</strong></p>
        <p>La buena noticia es tenernos las activistas acompañantes de las decisiones de abortar con y entre profesionales y trabajadores de la salud que a diario dignifican su hacer y sus vidas poniendo cuerpos y saberes para garantizar derechos. Para insistir que necesitamos la Ley de Interrupción Voluntaria del Embarazo para ampliar las posibilidades ya existentes, porque con las causales establecidas en Código Penal en 1921 no alcanza.</p>
        <p>La buena noticia es sabernos parte de un enorme movimiento que pulsa otro tiempo con respecto al derecho a decidir sobre nuestras cuerpas. La buena noticia es ayudar(nos). La buena noticia es elegir(nos).</p>
        <p>La buena noticia es no abandonar(nos), aún en los desencuentros que tenemos y es posible que no se acaben nunca.</p>
        <p>La buena noticia es que aprendimos y aprendemos a escuchar(nos).</p>
        <p>La buena noticia es que podemos repensar(nos).</p>
        <p>La buena noticia es saber que el aborto con medicamentos revolucionó las prácticas de abortar.</p>
        <p>La buena noticia es abrazar(nos) a los múltiples proyectos que rodean a las decisiones de abortar.</p>
        <p>La buena noticia es reconocer los variados motivos de conciencia que nos empujan en esta vida que vivimos.</p>
        <p>La buena noticia es que el ejercicio del poderío médico puede ser sancionado.</p>
        <p>¡La buena noticia es que a la clandestinidad no volvemos más!</p>
        <p>La buena noticia es saber que estamos a(r)mando comunidad.</p>
        <p>La buena noticia es que nos aferramos a las líneas del deseo de un porvenir donde los abortos sean siempre acompañados, amorosos y cuidados.</p>
        <p>La buena noticia es que sabemos que los queremos legales, seguros y gratuitos, libres y feministas en cualquier lugar (donde quien aborte lo decida, por si hace falta aclararlo).</p>
        <p>La buena noticia es que este 28 volveremos a las calles. Para seguir juntes.</p>
        <p><strong>La buena noticia es sentir que volvemos a elegirnos. Otra vez, este 28 de mayo.</strong></p>
        <Footer>
          <p>Ruth Zurbriggen</p>
          <p>Colectiva Feminista La Revuelta en Neuquén, el 26 de mayo de 2019.</p>
        </Footer>
      </Container>
    );
  }
}

export default App;
