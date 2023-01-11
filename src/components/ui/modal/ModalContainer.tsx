const ModalContainer: React.FC<{ children: React.ReactNode }> = (props) => {
  return <section className={"modalContainer"}>{props.children}</section>;
};

export default ModalContainer;
