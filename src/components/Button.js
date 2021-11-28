const Button = (props) => {
  return (
    <button name={props.name} onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
