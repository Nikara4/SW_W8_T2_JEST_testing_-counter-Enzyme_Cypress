const Input = (props) => {
  return (
    <>
      <input
        type="number"
        placeholder="type any number"
        value={props.value}
        onChange={props.handleChange}
      />
    </>
  );
};

export default Input;
