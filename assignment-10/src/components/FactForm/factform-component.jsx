function FactForm({ onFetch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onFetch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Get Cat Fact</button>
    </form>
  );
}

export default FactForm;