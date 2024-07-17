function SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" , fontSize:"50px" }}
      onClick={onClick}
    />
  );
}
export default SampleNextArrow