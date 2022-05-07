import { Route, useNavigate, Routes } from "react-router-dom";

// nested routes
import Offers from "./Offers";

export default function About() {
  const navigation = useNavigate();
  return (
    <div className="content">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora
        nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum
        eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores
        numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto
        doloremque. Corporis in et placeat unde sapiente perspiciatis minus!
        Recusandae, ad!
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora
        nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum
        eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores
        numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto
        doloremque. Corporis in et placeat unde sapiente perspiciatis minus!
        Recusandae, ad!
      </p>

      <button onClick={() => navigation(`/products/offers`)}>
        See Our Products
      </button>

      {/* New Way V6 */}
      <Routes>
        <Route path="offers" element={<Offers />} />
      </Routes>

      {/* 
      Old way with V5

      <Route path="/about/offers">
        <Offers />
      </Route> */}
    </div>
  );
}
