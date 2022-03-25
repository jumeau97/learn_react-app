function Cart(){
    const prix1 = 23
    const prix2 = 743
    const prix3 = 4738

    return (
        <div>
            <h2>Panier</h2>
            <ul>
                <li>Prix 1: {prix1} </li>
                <li>Prix 2: {prix2} </li>
                <li>Prix 3: {prix3} </li>
            </ul>
        </div>
    )
}

export default Cart