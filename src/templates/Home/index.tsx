import Title from "../../components/Title";
import CardGroup from "../../components/CardGroup";
import Card from "../../components/Card";
import CardTitle from "../../components/CardTitle";
import CardSubtitle from "../../components/CardSubtitle";
import PageTitle from "../../components/PageTitle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faFileAudio,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeTemplate() {
  return (
    <>
      <PageTitle title="Se passou 1 ano..." />
      <Title home>
        <FontAwesomeIcon icon={faStar} />
        Feliz 1 ano
        <FontAwesomeIcon icon={faStar} />
      </Title>

      <CardGroup>
        <Card color="yellow">
          <CardTitle>12 dias</CardTitle>
          <CardSubtitle>Um dia para cada mês de alegrias</CardSubtitle>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card color="red" href="04-01-20">
          <CardTitle>04/01/20</CardTitle>
          <CardSubtitle>1ª vez que nos vimos</CardSubtitle>
        </Card>
        <Card color="blue" href="23-01-21">
          <CardTitle>23/01/21</CardTitle>
          <CardSubtitle>Flertamos a 1ª vez</CardSubtitle>
        </Card>
        <Card color="yellow" href="29-01-21">
          <CardTitle>29/01/21</CardTitle>
          <CardSubtitle>Fênix Negra</CardSubtitle>
        </Card>
        <Card color="green" href="25-02-21">
          <CardTitle>25/02/21</CardTitle>
          <CardSubtitle>Primeiro encontro</CardSubtitle>
        </Card>
        <Card color="red" href="28-02-21">
          <CardTitle>28/02/21</CardTitle>
          <CardSubtitle>Dia do açaí</CardSubtitle>
        </Card>
        <Card color="blue" href="05-03-21">
          <CardTitle>05/03/21</CardTitle>
          <CardSubtitle>Fomos na sua casa</CardSubtitle>
        </Card>
        <Card color="yellow" href="12-03-21">
          <CardTitle>12/03/21</CardTitle>
          <CardSubtitle>Pedido de Namoro</CardSubtitle>
        </Card>
        <Card color="green" href="14-03-21">
          <CardTitle>14/03/21</CardTitle>
          <CardSubtitle>Sítio com nossos pais</CardSubtitle>
        </Card>
        <Card color="red" href="12-06-21">
          <CardTitle>12/06/21</CardTitle>
          <CardSubtitle>1º dia dos namorados</CardSubtitle>
        </Card>
        <Card color="blue" href="21-09-21">
          <CardTitle>21/09/21</CardTitle>
          <CardSubtitle>1ª Viagem</CardSubtitle>
        </Card>
        <Card color="yellow" href="05-03-21">
          <CardTitle>25/12/21</CardTitle>
          <CardSubtitle>1º Natal</CardSubtitle>
        </Card>
        <Card color="green" href="01-01-22">
          <CardTitle>01/01/22</CardTitle>
          <CardSubtitle>Ano novo Juntos</CardSubtitle>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card color="blue" href="1-ano">
          <CardTitle>12/03/22</CardTitle>
          <CardSubtitle>Hoje</CardSubtitle>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card color="red">
          <CardTitle>Em breve...</CardTitle>
          <CardSubtitle>
            Vou ir adicionando mais datas conforme for lembrando e surgindo
            novas comemorações!
          </CardSubtitle>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card color="green" href="/extras/quiz">
          <CardTitle>
            <FontAwesomeIcon icon={faQuestionCircle} /> Quiz{" "}
            <FontAwesomeIcon icon={faQuestionCircle} />
          </CardTitle>
          <CardSubtitle>
            Um quizz pra saber o quanto você lembra do nosso relacionamento!
          </CardSubtitle>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card color="blue" href="/extras/audios">
          <CardTitle>
            <FontAwesomeIcon icon={faFileAudio} /> Áudios Perdidos(WIP){" "}
            <FontAwesomeIcon icon={faFileAudio} />
          </CardTitle>
          <CardSubtitle>
            Alguns dos áudios que consegui encontrar e que são parte da nossa
            história!
          </CardSubtitle>
        </Card>
      </CardGroup>
    </>
  );
}
