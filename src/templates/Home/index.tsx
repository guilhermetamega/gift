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
      <PageTitle />
      <Title home>
        <FontAwesomeIcon icon={faStar} />
        Feliz 1 ano
        <FontAwesomeIcon icon={faStar} />
      </Title>
      <CardGroup>
        <Card color="red" href="/teste">
          <CardTitle>04/01/20</CardTitle>
          <CardSubtitle>Primeira vez que nos vimos</CardSubtitle>
        </Card>
        <Card color="blue">
          <CardTitle>23/01/21</CardTitle>
          <CardSubtitle>Primeiro flerte</CardSubtitle>
        </Card>
        <Card color="yellow">
          <CardTitle>28/01/21</CardTitle>
          <CardSubtitle>Copo da Fênix Negra</CardSubtitle>
        </Card>
        <Card color="green">
          <CardTitle>04/01/21</CardTitle>
          <CardSubtitle>Primeira vez que nos vimos</CardSubtitle>
        </Card>
        <Card color="red">
          <CardTitle>04/01/20</CardTitle>
          <CardSubtitle>Primeira vez que nos vimos</CardSubtitle>
        </Card>
        <Card color="blue">
          <CardTitle>23/01/21</CardTitle>
          <CardSubtitle>Primeiro flerte</CardSubtitle>
        </Card>
        <Card color="yellow">
          <CardTitle>28/01/21</CardTitle>
          <CardSubtitle>Copo da Fênix Negra</CardSubtitle>
        </Card>
        <Card color="green">
          <CardTitle>04/01/21</CardTitle>
          <CardSubtitle>Primeira vez que nos vimos</CardSubtitle>
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
            <FontAwesomeIcon icon={faFileAudio} /> Áudios Perdidos{" "}
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
