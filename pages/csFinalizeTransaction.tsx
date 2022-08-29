import NavMenu from './csNavMenu';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Collapse from 'react-bootstrap/Collapse';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';

//import nodemailer, { createTransport } from 'nodemailer';

import { Data } from './interfaces/Interfaces';

function csFinalizeTransaction() {

    /* const [validated, setValidated] = useState(false);

    const [open, setOpen] = useState(false);
    const [openCash, setOpenCash] = useState(false);
    const [openCardBrand, setOpenCardBrand] = useState(false);
    const [openPixCode, setOpenPixCode] = useState(false);

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const [address, setAddress] = useState("");
    const [complementary, setComplementary] = useState("");
    const [city, setCity] = useState("São João del Rei");

    const [delivery, setDelivery] = useState("Retirar no Estabelecimento");

    const [payment, setPayment] = useState("");
    const [exchange, setExchange] = useState(0);
    const [cardBrand, setCardBrand] = useState("Visa");

    const [show, setShow] = useState(true);
    const target = useRef(null);

    async function sendEmail() {

    };

    let total = 0;
    let productsTable = '<table style="width:50%; border: 1px solid white"><tr><th style="border: 1px solid white; background-color: #96D4D4; border-radius: 0.5rem; padding: 0.25rem">Items</th><th style="border: 1px solid white; background-color: #96D4D4; border-radius: 0.5rem; padding: 0.25rem">Qt.</th><th style="border: 1px solid white; background-color: #96D4D4; border-radius: 0.5rem; padding: 0.25rem">Preço</th></tr>';
    let prices = '';
    let finalPrice = 0; */

    return <>
        <NavMenu />
        <Container className="mt-6" /* style={{ marginTop: "1.5rem" }} */>
            <div className="text-left" /* style={{ textAlign: "left" }} */>
                <Button variant="primary" className="mb-4" /* style={{ marginBottom: "1rem" }} */ onClick={() => {} /* navigate("/cartshopping", { state: data }) */ }>Voltar</Button>
            </div>

            <Form noValidate validated={ true /* validated */ } onSubmit={ undefined /* sendEmail */ } >
                <Card
                    bg={'secondary'}
                    key={'0'}
                    className="mb-2 text-center"
                    /* style={{ textAlign: "center" }} */
                >
                    <Card.Header className="text-white" /* style={{ color: "white" }} */>Já estamos quase lá</Card.Header>
                    <Card.Body>
                        <Card.Title className="text-white" /* style={{ color: "white" }} */>Finalizar Pedido</Card.Title>
                        <br />
                        <Card.Text>
                            <p hidden>{/* productsTable += '<tr><td></td><th style="border: 1px solid white; background-color: #96D4D4; border-radius: 0.5rem; padding: 0.25rem">Total</th><td style="border: 1px solid white; background-color: #96D4D4; border-radius: 0.5rem; text-align: right; padding: 0.25rem"><b>R$' + finalPrice + ',00</b></td></tr></table>' */}</p>
                            <input type="hidden" name="orderCode" value="1278AS7" />
                            <input type="hidden" name="products" value={'' /* productsTable */} />
                            <input type="hidden" name="prices" value={'' /* prices */} />
                            <input type="hidden" name="finalPrice" value={'' /* finalPrice + 6 */} />
                            { /* data.products.map((s) => { total += (s.price * s.quantity); return null; }) */ }
                            <input type="hidden" name="message" value={'' /* payment == "Em Dinheiro" ? 'Valor do Pedido: R$' + (total + 6) + ',00 - Valor a Receber: R$' + exchange + ',00 - Troco a Entregar: R$' + (exchange - (total + 6)) + ',00' : payment == "Por Cartão" ? 'Valor do Pedido: R$' + (total + 6) + ',00 - Marca do Cartão: ' + cardBrand : payment == "Pix" ? 'Pagado' : '' */} />
                            <Accordion flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Identificação &nbsp;<h4><Badge pill bg="info">{/*name*/}</Badge></h4>&nbsp;<Badge pill bg="dark" text="light">{/*phoneNumber*/}{/*email ? ' | ' + email : ''*/}</Badge></Accordion.Header>
                                    <Accordion.Body>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Seu Nome</Form.Label>
                                                <InputGroup hasValidation>
                                                    <Form.Control name="name" placeholder="José ou Maria" onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {} /* setName(e.target.value) */} required />
                                                </InputGroup>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Seu Número de Contato</Form.Label>
                                                <InputGroup hasValidation>
                                                    <Form.Control name="phoneNumber" placeholder="DDD + número" onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {} /* setPhoneNumber(e.target.value) */} required />
                                                </InputGroup>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col className="flex items-center justify-center" /* style={{ display: "flex", alignItems: "center", justifyContent: "center" }} */>
                                                <Badge pill bg="warning" text="dark" style={{ whiteSpace: "break-spaces" }}><h6>Caso deseje receber a fatura com informações no seu email, preencha o campo a seguir</h6></Badge>
                                            </Col>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Seu Email</Form.Label>
                                                <Form.Control type="email" name="email" placeholder="Preencha seu email" onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {} /* setEmail(e.target.value) */} />
                                                <p>Este campo não é obrigatório</p>
                                            </Form.Group>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Entrega &nbsp;<Badge pill bg="dark" text="light">{/* delivery */}{/* delivery == "Por Entregador / Delivery" ? address ? ' · ' + address : '' : ''}{delivery == "Por Entregador / Delivery" ? complementary ? ' (' + complementary + ')' : '' : ''}{delivery == "Por Entregador / Delivery" ? city ? ' - ' + city : '' : '' */}</Badge></Accordion.Header>
                                    <Accordion.Body>
                                        <div className="flex justify-center" /* style={{ display: "flex", justifyContent: "center" }} */>
                                            Retirar no Estabelecimento &nbsp;
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                label="Por Entregador / Delivery"
                                                onChange={() => { {} /* setOpen(!open); delivery == "Retirar no Estabelecimento" ? setDelivery("Por Entregador / Delivery") : setDelivery("Retirar no Estabelecimento") */ }}
                                            />
                                        </div>
                                        <Collapse in={true /* open */}>
                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridAdress">
                                                    <Form.Label>Endereço (rua, número, completo, bairro)</Form.Label>
                                                    <InputGroup hasValidation>
                                                        <Form.Control name="address" placeholder="Rua Min. Gabriel Passos, 199 - Centro" required={true /* delivery == "Por Entregador / Delivery" */} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {} /* setAddress(e.target.value) */} />
                                                    </InputGroup>
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridAdditional">
                                                    <Form.Label>Complemento / Ponto de Referência / Observações</Form.Label>
                                                    <Form.Control name="complementary" placeholder="Apto. 203 / Fundos / Próximo ao posto de saúde / ..." onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {} /* setComplementary(e.target.value) */} />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label>Cidade</Form.Label>
                                                    <InputGroup hasValidation>
                                                        <Form.Select name="city" required={true /* delivery == "Por Entregador / Delivery" */} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {} /* setCity(e.target.value) */}>
                                                            <option>São João del Rei</option>
                                                            <option>Tiradentes</option>
                                                        </Form.Select>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Row>
                                        </Collapse>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Pagamento &nbsp;<Badge pill bg="dark" text="light">{/* payment + (exchange > 0 && openCash ? ' · R$ ' + exchange + ',00' : '') + (openCardBrand ? ' · ' + cardBrand : '') + (openPixCode ? ' · Código Pix: ' + 'AD13' : '') */}</Badge></Accordion.Header>
                                    <Accordion.Body>
                                        <div className="mb-3">
                                            <Form.Check
                                                inline
                                                type="radio"
                                                label="Em Dinheiro"
                                                name="payment"
                                                id="Cash"
                                                onClick={() => { /* setOpenCash(!openCash); setOpenCardBrand(false); setOpenPixCode(false); setPayment("Em Dinheiro") */ }}
                                            />
                                            <Form.Check
                                                inline
                                                type="radio"
                                                label="Por Cartão"
                                                name="payment"
                                                id="Card"
                                                onClick={() => { /* setOpenCash(false); setOpenCardBrand(!openCardBrand); setOpenPixCode(false); setPayment("Por Cartão") */ }}
                                            />
                                            <Form.Check
                                                inline
                                                type="radio"
                                                label="Pix"
                                                name="payment"
                                                id="Pix"
                                                onChange={() => { /* setOpenCash(false); setOpenCardBrand(false); setOpenPixCode(!openPixCode); setPayment("Pix") */ }}
                                            />
                                        </div>

                                        <Collapse in={true /* openCash */}>
                                            <Row className="mb-3">

                                                <Form.Group as={Col} controlId="formGridExchange">
                                                    <Form.Label>Dinheiro em notas</Form.Label>
                                                    <InputGroup hasValidation>
                                                        <div className="flex items-center justify-center" /* style={{ display: "flex", alignItems: "center", justifyContent: "center" }} */>
                                                            R$
                                                            <Form.Control id="exchange" type="number" placeholder="100" min="0" onChange={(e: { target: { value: string; }; }) => {} /* setExchange(parseInt(e.target.value)) */} className="w-100" /* style={{ width: "100px" }} */ required={true /* (payment == "Em Dinheiro") */} />
                                                            ,00
                                                            <Form.Control.Feedback className="mt-0" /* style={{ marginTop: "0" }} */ >
                                                                &nbsp; Não se esqueça que esse valor tem que ser maior que o valor do pedido. {/* { total <= exchange ? "true" : "false" }{ total }{ exchange } */}
                                                            </Form.Control.Feedback>
                                                            <Form.Control.Feedback type="invalid" className="mt-0" /* style={{ marginTop: "0" }} */ >
                                                                &nbsp; É necessário pôr o valor que será entregue para que calculemos o troco.
                                                            </Form.Control.Feedback>
                                                        </div>
                                                    </InputGroup>

                                                </Form.Group>

                                            </Row>
                                        </Collapse>

                                        <Collapse in={true /* openCardBrand */}>
                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridCard">
                                                    <Form.Label>Marca</Form.Label>
                                                    <InputGroup hasValidation>
                                                        <Form.Select id="Card" required={true /* payment == "Por Cartão" */} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {} /* setCardBrand(e.target.value) */}>
                                                            <option>Visa</option>
                                                            <option>MasterCard</option>
                                                        </Form.Select>

                                                        <Form.Control.Feedback className="mt-0" /* style={{ marginTop: "0" }} */ >
                                                            &nbsp; Cartão inserido com sucesso.
                                                        </Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid" className="mt-0" /* style={{ marginTop: "0" }} */ >
                                                            &nbsp; É necessário preencher o valor com a marca do cartão.
                                                        </Form.Control.Feedback>

                                                    </InputGroup>
                                                </Form.Group>

                                            </Row>
                                        </Collapse>

                                        <Collapse in={true /* openPixCode */}>
                                            <Row className="mb-3">

                                                <Form.Group as={Col} controlId="formGridPixCode">
                                                    <Form.Label>Código Pix</Form.Label>
                                                    <h3><Badge bg="secondary">AD13</Badge></h3>
                                                </Form.Group>

                                            </Row>
                                        </Collapse>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </Card.Text>
                    </Card.Body>
                    <Card bg={"secondary"} border="danger" className="m-4 mx-12" /* style={{ margin: '1rem', marginRight: "3rem", marginLeft: "3rem" }} */>
                        <Card.Header>Bom Apetite</Card.Header>
                        <Card.Body>
                            <Card.Title>Sua conta</Card.Title>
                            {/* {data.products.map((s) => */}
                                <Card.Text className="flex justify-between" /* style={{ display: "flex", justifyContent: "space-between" }} */>
                                    <Badge pill bg="warning" text="dark">{/* s.name */} x{/* s.quantity */}</Badge> <span>R${/* s.price * s.quantity */},00</span>
                                </Card.Text>
                            {/* )} */}
                            <Card.Text className="flex items-center justify-between" /* style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} */>
                                <b>Entregador</b> <Badge pill bg="light" text="dark">R$6,00</Badge>
                            </Card.Text>
                            <Card.Title className="flex justify-between" /* style={{ display: "flex", justifyContent: "space-between" }} */>
                                <h4><b>Total</b></h4> <h3><Badge pill bg="danger" text="dark">R${/* total + 6 */},00</Badge></h3>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Card>
                <>
                    {/* !show */ true ? <Alert variant="danger" onClose={() => {} /* setShow(!false) */} className="my-120" /* style={{ margin: "0 30rem" }} */ dismissible>
                        <Alert.Heading>Complete todos os campos obrigatórios</Alert.Heading>
                        <p>
                            Verifique que não faltam informações nas sessões de Identificação, Entrega e Pagamento.
                        </p>
                    </Alert> : null}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button style={{ margin: "1rem" }} variant="primary" type="submit" disabled={true /* payment == "" */}>Enviar</Button>
                    </div>
                </>
            </Form>
        </Container>
    </>
}

export default csFinalizeTransaction