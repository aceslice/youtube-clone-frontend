const Breadcrumbs = () => {
  const buttons = [
    "All",
    "Javascript",
    "Music",
    "Sketch Comedy",
    "Live",
    "AI",
    "Memes",
    "Art",
    "Gaming",
    "Mixes",
    "Python",
    "PHP",
    "Elon Musk",
    "Space X",
  ];
  return (
    <div className="breadcrumbs">
      {buttons.map((button) => (
        <button key={button}>{button}</button>
      ))}
    </div>
  );
};

export default Breadcrumbs;
