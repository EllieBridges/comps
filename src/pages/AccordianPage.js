import Accordion from "../components/Accordion";

function AccordianPage() {
  const items = [
    {
      id: "213g2",
      label: "First things first",
      content:
        "I'm alway hungry. I need to write a long paragraph so here it goes. 'lalala, lalalalala, lalala, lalalalala.",
    },
    {
      id: "sje4j",
      label: "Secondly...",
      content: "My favourite food is Laksa",
    },
    {
      id: "273kl",
      label: "Lastly...",
      content: "There's always room for dessert",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordianPage;
