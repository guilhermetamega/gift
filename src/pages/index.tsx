import Title from "../components/Title";
import CardGroup from "../components/CardGroup";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Title>Se passou 1 ano...</Title>
      <CardGroup>
        <Card color="red">Bom dia</Card>
        <Card color="blue">Bom dia</Card>
        <Card color="yellow">Bom dia</Card>
        <Card color="green">Bom dia</Card>
      </CardGroup>
    </>
  );
}
