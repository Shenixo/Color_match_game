const Title = ({ content }) => {
  const [hint, setHint] = useState(false);

  useEffect(() => {
    const handleHintUpdated = (event) => setHint(event.detail);
    document.addEventListener("hintUpdated", handleHintUpdated);
    return () => {
      document.removeEventListener("hintUpdated", handleHintUpdated);
    };
  }, []);

  return (
    <div className="title">
      <h1>{content}</h1>
      <div className="image-div">
        <ChosenColor />
        <Link to="/">
          <img src={brain} onClick={TabClick} alt="Brain image" width={80} />
        </Link>
      </div>
    </div>
  );
};

export default Title;
