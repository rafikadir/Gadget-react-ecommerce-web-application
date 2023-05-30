import './Promo.scss';

const Promo = () => {
    return (
        <div className="alert alert-dismissible fade show text-center promo-bar" role="alert">
            Use coupon &apos; FR30 &apos; to get up to <strong>30% OFF!</strong>
        
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>  
    );
};

export default Promo;