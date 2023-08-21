import Home from "../Components/Home";
import { connect } from "react-redux";
import { addToCart } from "../Services/Actions/Actions"


const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatcg => ({
    addtoCartHandler : data => dispatch (addToCart(data))
})

export default connect (mapStateToProps , mapDispatchToProps)(Home)


// export default Home;