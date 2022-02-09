import Title from "../components/Title";
import CardGroup from "../components/CardGroup";
import Card from "../components/Card";
import CardTitle from "../components/CardTitle";
import CardSubtitle from "../components/CardSubtitle";
import PageTitle from "../components/PageTitle";

export default function Home() {
  return (
    <>
      <PageTitle />
      <Title home>★Se passou 1 ano★</Title>
      <CardGroup>
        <Card color="red" href="./dates/test">
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
    </>
  );
}
