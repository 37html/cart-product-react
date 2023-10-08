import './style.scss';

function CartFooter({total}){
    return(
        <footer className="cart-footer">
            <div className="cart-footer__count">{total.count} ед.</div>
            <div className="cart-footer__price">{total.price} руб.</div>
        </footer>
    );
}

export default CartFooter;
