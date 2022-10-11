import { Container } from "react-bootstrap";
const Historia14 = () => {
    return (
    <Container className="profile">
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Date</th>
                <th scope="col">Total</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>01/01/2021</td>
                <td>$100</td>
                <td>Delivered</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>01/01/2021</td>
                <td>$100</td>
                <td>Delivered</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>01/01/2021</td>
                <td>$100</td>
                <td>Delivered</td>
                </tr>
            </tbody>
        </table>
    </Container>
    )
}
export default Historia14;