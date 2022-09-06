import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";

export function MenuBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {} /* navigate("/" + props.data.client.name) */}
          >
            <img
              src={
                "data:image/png;base64,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" /* props.data ? props.data.client.logoImage : '' */
              }
              width="48"
              height="48"
              className="d-inline-block align-top"
              alt={""}
            />
          </Navbar.Brand>
          <Navbar.Brand
            onClick={() => {} /* navigate("/" + props.data.client.name) */}
          >
            {/* props.data.client.name */}
          </Navbar.Brand>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              /* style={{
                            backgroundColor: "transparent",
                            borderWidth: "0px",
                            //borderColor: "white",
                            padding: "12px",
                            borderRadius: "100%"
                        }} */
              className="dropdown-toggle-image-small bg-transparent border-0 p-12 rounded-full"
            >
              <img
                src={
                  "data:image/png;base64,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"
                } //"pizza.png"
                width="36"
                height="36"
                className="d-inline-block align-top invert-1"
                alt="React Bootstrap logo"
                //style={{ filter: "invert(1)" }}
              />
              <Badge
                className="absolute -ml-15 text-base text-base"
                pill
                bg="danger"
                /* style={{
                            position: "absolute",
                            marginLeft: "-15px", fontSize: ".9rem"
                        }} */
              >
                <b>{/* data ? data.products.length : 0 */}</b>
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu
              className="right-auto left-2/4 -translate-x-1/2 translate-y-0 mt-4 text-end min-w-fit"
              /* style={{
                        right: "auto",
                        left: "50%",
                        WebkitTransform: "translate(-50%, 0)",
                        transform: "translate(-50%, 0)",
                        marginTop: "1rem",
                        textAlign: "end",
                        minWidth: "auto"
                    }} */
            >
              <Dropdown.Item className="dropdown-item-text-no-content">
                <h5
                  className="text-center text-black" /* style={{ textAlign: "center", color: "black" }} */
                >
                  Sua compra
                </h5>
              </Dropdown.Item>
              {
                /* data && data.products.length > 0 ? data.products.map((p) => */
                <Dropdown.Item>
                  <div
                    className="flex items-center justify-between" /* style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} */
                  >
                    <Badge
                      className="mr-20"
                      pill
                      bg="danger" /* style={{ marginRight: "20px" }} */
                    >
                      {/* p.quantity */}
                    </Badge>
                    <div>
                      <h6
                        className="text-black" /* style={{ color: "black" }} */
                      >
                        <b>{/* p.name}{p.half ? ' / ' + p.half : '' */}</b>
                      </h6>
                      <p>
                        Sub-total: <b>R${/* p.quantity * p.price */},00</b>
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-xs text-white mb-0" /* style={{ fontSize: "0rem", color: "white", marginBottom: "0" }} */
                  >
                    {/* (total += (p.quantity * p.price)) == 0 ? null : total */}
                  </p>
                </Dropdown.Item>
                /* ) : null */
              }
              <Dropdown.Item
                className="dropdown-item-text-no-content text-center" /* style={{ textAlign: "center" }} */
              >
                <h6 className="text-black" /* style={{ color: "black" }} */>
                  <b>
                    Total: R${" "}
                    <span
                      className="text-3xl" /* style={{ fontSize: "1.75rem" }} */
                    >
                      {/*total*/}
                    </span>
                    <span
                      className="text-xl" /* style={{ fontSize: "1.25rem" }} */
                    >
                      ,00
                    </span>
                  </b>
                </h6>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
}
