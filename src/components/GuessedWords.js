function GuessedWords(props) {
  let content;
  if (props.guessedWords.length === 0) {
    content = (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    );
  }
  return <div data-test="component-guessed-words">{content}</div>;
}

export default GuessedWords;
