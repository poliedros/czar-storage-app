import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormControl from 'react-bootstrap/FormControl';
import Badge from 'react-bootstrap/Badge';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Overlay from 'react-bootstrap/Overlay';

import { Data, Product } from './interfaces/Interfaces';

interface FdPizzaBasicSelectProps { data: Data }

function csSelect() {

    /* let navigate = useNavigate();

    const location = useLocation();
    const [data, setData] = useState(location.state as Data);

    //const data = location.state as Data;

    const [products, setProducts] = useState(data != null ? data.products
        : [
            {
                type: '',
                image: '',
                description: '',
                id: 0,
                label: '1',
                title: props.data.firstItem != 'Pizza' ? 'Bebida (Item 1)' : 'Pizza (Item 1)',
                name: '',
                half: '',
                quantity: 1,
                price: 0,
                note: ''
            }
        ]);

    const [index, setIndex] = useState(0);

    let verify = true;

    const [show, setShow] = useState(false);
    const target = useRef(null);

    const getIndex = async (idx: number) => {
        setIndex(idx);
    };

    const productChangeQuantity = async (v: number) => {
        let copyList = [...products];
        copyList[index].quantity = copyList[index].quantity + v;
        if (copyList[index].quantity == 0)
            orderRemoveProduct();
        else
            setProducts(copyList);
    };

    const orderAddProductValue = async (name: string, price: number) => {
        let copyList = [...products];
        copyList[index].name = name;
        copyList[index].price = price;
        setProducts(copyList);
    };

    const orderRemoveProduct = async () => {
        let copyList = [...products];
        copyList.splice(index, 1);
        setProducts(copyList);
        if (index == products.length - 1)
            setIndex(index - 1);
    };

    const orderRemoveAllProducts = async () => {
        let copyList: Product[] = [];
        setProducts(copyList);
        let copyData = data;
        copyData.products = copyList;
        setData(copyData);
    };

    const productChangeHalf = async (half: string, price: number) => {
        let copyList = [...products];
        copyList[index].half = half;
        /* const prod = itemsFile.items[0].pizza.filter(f => copyList[index].name == f.name); /
        const prod = props.data.client.items.filter(f => f.type == 'Pizza' && copyList[index].name == f.name);

        if (price == 0)
            copyList[index].price = prod[0].price;
        else
            if (prod[0].price < price)
                copyList[index].price = price;
            else
                copyList[index].price = prod[0].price;
        setProducts(copyList);
    };

    const orderAddNote = async (note: string) => {
        let copyList = [...products];
        copyList[index].note = note;
        setProducts(copyList);
    };

    function findId() {
        let check = false;
        for (let aux = 0; aux < products.length; aux++) {
            for (let i = 0; i < products.length; i++) {
                if (aux == products[i].id)
                    check = true;
            }
            if (!check) { return aux; }
            check = false;
        }
        return products.length;
    };

    useEffect(() => {
        setData(props.data);
    }, []); */

    return <>
        <Container className="mt-6 mb-6" /* style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }} */>
            <div className="text-left" /* style={{ textAlign: "left" }} */>
                <Button className="mb-4" /* style={{ marginBottom: "1rem" }} */ onClick={() => { /* alert("CARA"); orderRemoveAllProducts(); alert(JSON.stringify(data)); */ /* navigate("/" + data.urlName); */ }}>Retornar ao Iní­cio</Button>
            </div>
            <div>
                <Card bg="secondary" className="text-center" /* style={{ textAlign: "center" }} */>
                    <Card.Header className="flex flex-col items-center" /* style={{ display: "flex", flexDirection: "column", alignItems: "center" }} */>
                        <DropdownButton className="mb-4" /* style={{ marginBottom: "1rem" }} */ as={ButtonGroup} title="Adicionar um novo produto" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1" /* onClick={() => { setProducts([...products, { id: findId(), title: 'Pizza (Item ' + (findId() + 1) + ")", name: '', half: '', quantity: 1, price: 0, note: '', type: '', image: '', description: '', label: '' }]); setIndex(products.length) }} */>Pizza</Dropdown.Item>
                            <Dropdown.Item eventKey="2" /* onClick={() => { setProducts([...products, { id: findId(), title: 'Bebida (Item ' + (findId() + 1) + ")", name: '', half: '', quantity: 1, price: 0, note: '', type: '', image: '', description: '', label: '' }]); setIndex(products.length) }} */>Bebida</Dropdown.Item>
                        </DropdownButton>
                        <Nav variant="pills" defaultActiveKey="0">
                            {/* {products.map((it, idx) => */}
                                <Nav.Item>
                                    <Nav.Link /* id={idx.toString()} eventKey={idx.toString()} onClick={() => { getIndex(idx) }} active={idx == index} */>{ /* it.title */ }</Nav.Link>
                                </Nav.Item>
                            {/* )} */}
                        </Nav>
                    </Card.Header>
                    { /* products[index].title.includes("Pizza") ? */ true ?
                        <Card.Body>
                            <div className="text-right" /* style={{ textAlign: "right" }} */>
                                { /* products.length > 1 ? */ true ?
                                    <Button variant="danger" /* onClick={() => { orderRemoveProduct() }} */>Apagar - { /* products[index].title */ }</Button>
                                    :
                                    <Button /* onClick={() => navigate("/" + props.data.urlName)} */>Retornar ao Iní­cio</Button>
                                }
                            </div>
                            <Card.Title className="flex justify-center m-4" /*style={{ display: "flex", justifyContent: "center", margin: "1rem" }}*/>Escolha até dois tipos de Pizzas &nbsp;<Badge pill bg="warning" text="dark">{ /* products[index].name + (products[index].half ? ' / ' + products[index].half : '')}{products[index].name ? ' x' + products[index].quantity : '' */ }</Badge></Card.Title>
                            <br />
                            <Card.Text>
                                <Accordion flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <Figure>
                                                <Figure.Image
                                                    width={45}
                                                    height={45}
                                                    alt="171x180"
                                                    src={'data:image/png;base64,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'} //"pizza_2.png"
                                                    className="m-0 mr-10"
                                                    //style={{ margin: "0 10px 0 0" }}
                                                />
                                            </Figure>
                                            Pizza 1 &nbsp;<Badge pill bg="secondary">{ /* products[index].name */ }</Badge>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <fieldset>
                                                <Form.Group as={Row} className="mb-12">
                                                    <Col sm={12}>
                                                        <Table striped responsive hover size="sm">
                                                            <tbody>
                                                                { /* props.data.client ? props.data.client.items ? props.data.client.items.filter(f => f.type == "Pizza").map(i => { */
                                                                    /* return */ <tr className="align-middle">
                                                                        <td>
                                                                            <Form.Check
                                                                                type="radio"
                                                                                label=""
                                                                                name="Pizza"
                                                                                id={''} //{i.name}
                                                                                className="ml-10"
                                                                                //style={{ marginLeft: "10px" }}
                                                                                onClick={() => { /* orderAddProductValue(i.name ?? '', i.price ?? 0); productChangeHalf('', 0) */ }}
                                                                                checked={ true /* products[index].name == i.name */ }
                                                                            />
                                                                        </td>
                                                                        <td>
                                                                            <Figure.Image
                                                                                width={45}
                                                                                height={45}
                                                                                alt="171x180"
                                                                                src={'data:image/png;base64,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'} //{i.image}
                                                                                className="m-0 mr-10"
                                                                                //style={{ margin: "0 10px 0 0" }}
                                                                            />
                                                                        </td>
                                                                        <td>
                                                                            <b>{/* i.name */ }</b> {' ' /* + i.description */ }
                                                                        </td>
                                                                        <td>
                                                                            <Badge pill bg="dark" text="light" style={{ marginRight: "10px" }}>
                                                                                R$ { /* i.price */ },00
                                                                            </Badge>
                                                                        </td>
                                                                    </tr>
                                                                /* }) : null : null */ }
                                                            </tbody>
                                                        </Table>
                                                        <div className="flex items-center" /* style={{ display: "flex", alignItems: "center" }} */ >
                                                        </div>
                                                    </Col>
                                                </Form.Group>
                                            </fieldset>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <Figure>
                                                <Figure.Image
                                                    width={45}
                                                    height={45}
                                                    alt="171x180"
                                                    src={'data:image/png;base64,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'} //"pizza_2.png"
                                                    className="m-0 mr-10"
                                                    //style={{ margin: "0 10px 0 0" }}
                                                />
                                            </Figure>
                                            Pizza 2 &nbsp;<Badge pill bg="secondary">{ /* products[index].half */ }</Badge>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <fieldset>
                                                <Form.Group as={Row} className="mb-12">
                                                    <Col sm={12}>
                                                        <Table striped responsive hover size="sm">
                                                            <tbody>
                                                                <tr className="align-middle">
                                                                    <td>
                                                                        <Form.Check
                                                                            type="radio"
                                                                            label=""
                                                                            name="Pizza-2"
                                                                            id="NoPizza"
                                                                            className="m-0 ml-10"
                                                                            //style={{ marginLeft: "10px" }}
                                                                            onClick={() => { /* productChangeHalf('', 0) */ }}
                                                                            checked={ true /* products[index].half == "" */ }
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                    </td>
                                                                    <td>
                                                                        Não Selecionar
                                                                    </td>
                                                                    <td>
                                                                    </td>
                                                                </tr>
                                                                { /* props.data.client ? props.data.client.items ? props.data.client.items.filter(f => f.type == 'Pizza' && products[index].name != '' && f.name != products[index].name).map(i => {
                                                                    return */ <tr className="align-middle">
                                                                        <td>
                                                                            <Form.Check
                                                                                type="radio"
                                                                                label=""
                                                                                name="Pizza-2"
                                                                                id={ '' /* i.name */ }
                                                                                className="ml-10"
                                                                                //style={{ marginLeft: "10px" }}
                                                                                onClick={() => { /* productChangeHalf(i.name ?? '', i.price ?? 0) */ }}
                                                                                checked={ true /* products[index].half == i.name */ }
                                                                            />
                                                                        </td>
                                                                        <td>
                                                                            <Figure.Image
                                                                                width={45}
                                                                                height={45}
                                                                                alt="171x180"
                                                                                src={'data:image/png;base64,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' /* i.image */ }
                                                                                className="m-0 ml-10"
                                                                                //style={{ margin: "0 10px 0 0" }}
                                                                            />
                                                                        </td>
                                                                        <td>
                                                                            <b>{ /* i.name */ }</b> {' ' /* + i.description */ }
                                                                        </td>
                                                                        <td>
                                                                            <Badge pill bg="dark" text="light" className="mr-10" /* style={{ marginRight: "10px" }} */>
                                                                                R$ { /* i.price */ },00
                                                                            </Badge>
                                                                        </td>
                                                                    </tr>
                                                                /* }) : null : null */ }
                                                            </tbody>
                                                        </Table>
                                                    </Col>
                                                </Form.Group>
                                            </fieldset>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Borda</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Adicional</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <div className="flex items-center mt-4" /* style={{ display: "flex", alignItems: "center", marginTop: "1rem" }} */>
                                    <InputGroup className="mb-3">
                                        <Button variant="danger" id="button-addon1"
                                            /* onClick={
                                                () => products[index].quantity > 0
                                                    ? (products.length == 1 && products[index].quantity == 1) ?
                                                        navigate("/" + props.data.urlName) : productChangeQuantity(-1)
                                                    : null} style={{ width: "45px" }} */>
                                            <b>-</b>
                                        </Button>
                                        <FormControl className="w-45 flex-none" /* style={{ width: "45px", flex: "none" }} */
                                            placeholder={ '' /* products[index].quantity.toString() */ } disabled
                                            aria-describedby="basic-addon1"
                                        />
                                        <Button variant="success" id="button-addon2" className="w-45" /* onClick={() => products[index].quantity < 99
                                            ? productChangeQuantity(1) : null} style={{ width: "45px" }} */>
                                            <b>+</b>
                                        </Button>
                                    </InputGroup>
                                    <Badge bg="light" text="dark"><h4 className="text-black" /* style={{ color: 'black' }} */>Subtotal: R$ { /* (products[index].quantity * products[index].price) */ },00</h4></Badge>
                                </div>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="flex justify-center" /* style={{ display: "flex", justifyContent: "center" }} */>Observações:</Form.Label>
                                    <Form.Control as="textarea" id="observ" rows={3} value={ '' /* products[index].note ? products[index].note : '' */ } /* onChange={(e) => { orderAddNote(e.currentTarget.value ?? '') }} */ />
                                </Form.Group>
                            </Card.Text>
                        </Card.Body>
                        :
                        <Card.Body>
                            <div className="text-right" /* style={{ textAlign: "right" }} */>
                                { /* products.length > 1 ? */ true ?
                                    <Button variant="danger" onClick={() => { /* orderRemoveProduct() */ }}>Apagar - { /* products[index].title */ }</Button>
                                    :
                                    <Button onClick={() => {} /* navigate("/"  + props.data.urlName) */}>Retornar ao Iní­cio</Button>
                                }
                            </div>
                            <Card.Title className="flex justify-center m-4" /* style={{ display: "flex", justifyContent: "center", margin: "1rem" }} */>Escolha uma Bebida &nbsp;<Badge pill bg="warning" text="dark">{ /* products[index].name}{products[index].name ? ' x' + products[index].quantity : null */ }</Badge></Card.Title>
                            <br />
                            <Card.Text>
                                <Accordion flush>
                                    { /* props.data.client ? props.data.client.items ? Array.from(new Set(props.data.client.items.filter(f => (f.type == "Drink")).map(({ subType }) => {
                                        return */ <Accordion.Item eventKey={ '' /* subType */ }>
                                            <Accordion.Header>
                                                <Figure>
                                                    <Figure.Image
                                                        width={45}
                                                        height={45}
                                                        alt="171x180"
                                                        src={'data:image/png;base64,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'} //"soda.png"
                                                        className="m-0 mr-10"
                                                        //style={{ margin: "0 10px 0 0" }}
                                                    />
                                                </Figure>
                                                { /* subType */ } {/* Refrigerante 1L */}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <fieldset>
                                                    <Form.Group as={Row} className="mb-12">
                                                        <Col sm={12}>
                                                            <Table striped responsive hover size="sm">
                                                                <tbody>
                                                                    { /* props.data.client ? props.data.client.items ? props.data.client.items.filter(f => (f.type == "Drink" && f.subType == subType)).map(d => {
                                                                        return */ <tr className="align-middle">
                                                                            <td>
                                                                                <Form.Check
                                                                                    type="radio"
                                                                                    label=""
                                                                                    name="Refri"
                                                                                    id={ '' /* d.name */ }
                                                                                    onClick={() => { /* orderAddProductValue(d.name, d.price) */ }}
                                                                                    checked={ true /* products[index].name == d.name */ }
                                                                                    className="ml-10"
                                                                                    //style={{ marginLeft: "10px" }}
                                                                                />
                                                                            </td>
                                                                            <td>
                                                                                <Figure.Image
                                                                                    width={45}
                                                                                    height={45}
                                                                                    alt="171x180"
                                                                                    src={'data:image/png;base64,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' /* d.image */ }
                                                                                    className="m-0 mr-10"
                                                                                    //style={{ margin: "0 10px 0 0" }}
                                                                                />
                                                                            </td>
                                                                            <td>
                                                                                <b>{ /*d.name */ }</b> { /* d.description */ }
                                                                            </td>
                                                                            <td>
                                                                                <Badge pill bg="dark" text="light">
                                                                                    R$ { /* d.price */ },00
                                                                                </Badge>
                                                                            </td>
                                                                        </tr>
                                                                    /* }) : null : null */ }
                                                                </tbody>
                                                            </Table>
                                                        </Col>
                                                    </Form.Group>
                                                </fieldset>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    /* }))) : null : null */ }
                                </Accordion>
                                <div className="flex items-center mt-4" /* style={{ display: "flex", alignItems: "center", marginTop: "1rem" }} */>
                                    <InputGroup className="mb-3">
                                        <Button variant="danger" id="button-addon1" className="w-45" /* onClick={() => products[index].quantity > 0 ? productChangeQuantity(-1) : null} style={{ width: "45px" }} */>
                                            <b>-</b>
                                        </Button>
                                        <FormControl className="w-45 flex-none" /* style={{ width: "45px", flex: "none" }} */
                                            placeholder={ '' /* products[index].quantity.toString() */ } disabled
                                            aria-describedby="basic-addon1"
                                        />
                                        <Button variant="success" id="button-addon2" className="w-45" /* onClick={() => products[index].quantity < 99
                                            ? productChangeQuantity(1) : null} style={{ width: "45px" }} */>
                                            <b>+</b>
                                        </Button>
                                    </InputGroup>
                                    <Badge bg="light" text="dark"><h4 className="text-black" /* style={{ color: 'black' }} */>Subtotal: R$ { /* (products[index].quantity * products[index].price) */ },00</h4></Badge>
                                </div>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{ display: "flex", justifyContent: "center" }}>Observações:</Form.Label>
                                    <Form.Control as="textarea" id="observ" rows={3} /* value={products[index].note ? products[index].note : ''} onChange={(e) => { orderAddNote(e.currentTarget.value ?? '') }} */ />
                                </Form.Group>
                            </Card.Text>
                        </Card.Body>
                    }
                </Card>
                { /* products.map(s => s.price > 0 ? null : verify = false) */ }
                { /* verify ? */ true ?
                    <div className="flex justify-center" /* style={{ display: "flex", justifyContent: "center" }} */><Button variant="success" className="mt-4" /* style={{ marginTop: "1rem" }} */ onClick={() => { /* props.data.products = products; navigate("/cartshopping", { state: props.data }) */ }}>Confirmar Lista de Compra</Button></div>
                    : <>
                        <div className="flex justify-center" /* style={{ display: "flex", justifyContent: "center" }} */><Button variant="success" className="mt-4" /* style={{ marginTop: "1rem" }} */ ref={ null /* target */ } /* onClick={() => setShow(!show)} */ >Confirmar Lista de Compra</Button></div>
                        {/* <Overlay target={ /* target.current / } show={ true /* show / } placement="right">
                            {({ placement, arrowProps, show: _show, popper, ...props }) => (
                                <div
                                    {...props}
                                    className="px-2 py-10 ml-10 text-white rounded"
                                    style={{
                                        /* backgroundColor: 'rgba(255, 100, 100, 0.85)',
                                        padding: '2px 10px',
                                        marginLeft: '10px',
                                        color: 'white',
                                        borderRadius: 3, /
                                        ...props.style,
                                    }}
                                >
                                    Selecione todos os produtos
                                </div>
                            )}
                        </Overlay> */}
                    </>}
            </div>
        </Container>
    </>
}

export default csSelect