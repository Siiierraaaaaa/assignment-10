function FactDisplay({ fact, error }) {
  return (
    <div>
      {fact && <p>{fact}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default FactDisplay;