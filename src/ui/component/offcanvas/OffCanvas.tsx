import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

/**
 * Type definition of the component property. 
 * 
 * Example of above property.
 *  const prop: OffCanvasProps = {
 *     buttonText : "Click",
 *     canvasTitle: "This is a canvasTitle",
 *     bodyText: "Welcome to bodytext"
 *  } 
 */
export type OffCanvasProps = {
  buttonText: String;
  canvasTitle: String;
  bodyText: String;
  children: [JSX.Element] 
}

/**
 * Function for ui Component for canvas component.
 */
function OffCanvas(props?: OffCanvasProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (props) {
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          {props.buttonText}
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{props.canvasTitle}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>{props.bodyText}</Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  else{
    return(
<>
</>
    )
  }
}

export default OffCanvas;
