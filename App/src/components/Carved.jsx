import ReactCurvedText from "react-curved-text";

const Carved = () => {
  return (
    <div class="m-0 p-0">
      {" "}
      <ReactCurvedText
        width={915}
        height={554}
        cx={447}
        cy={264}
        rx={213}
        ry={182}
        startOffset={10}
        reversed={true}
        text="Welcome to Giving Back Official  "
        textProps={{ style: { fontSize: 46 } }}
        textPathProps={null}
        tspanProps={-23}
        ellipseProps={null}
        svgProps={null}
      />
    </div>
  );
};

export default Carved;
