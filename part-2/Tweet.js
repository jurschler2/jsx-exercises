function Tweet(props) {
  const colors = {color: props.favoriteColor,
    backgroundColor: props.otherColor,
  };
  return (
    <div>
      <p style={colors}>{ props.username } AKA { props.name } wrote on { props.date }: { props.message }.</p>
    </div>
  );
}