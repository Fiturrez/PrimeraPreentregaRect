import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <nav style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', padding: '10px', backgroundColor: 'pink'}}>
            <h1 style={{color:'grey'}}>Hilaria ~ Tienda</h1>
            <ul style={{listStyle: 'none', textAlign: 'justify', color:'white'}}>
                <li><a href="#home">Carteras/Mochilas</a></li>
                <li><a href="#products">Porta Celulares</a></li>
                <li><a href="#about">Billeteras/Monederos</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar