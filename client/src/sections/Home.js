import Nav from "./Nav"
import '../assets/login.css';

const Home = () => {
    return (
        <div id='bg'>
             {/* <Nav /> */}
            <div className="login">
            <form>
      <div className="form-field" id="form-field-user">
        <input type="text" id="" placeholder="Username" required />
      </div>

      <div className="form-field" id="form-field-pwd">
        <input type="password" placeholder="Password" required />
      </div>

      <div className="form-field" id="form-field-btn">
        <button
          onClick={()=>("location.href='./signup.html'")}
          className="btn2"
          id="createAccount"
          type="submit"
        >
          Signup
        </button>
        <button className="btn" id="submit" type="submit">Login</button>
      </div>
    </form>
    </div>
        </div>
    )
};

export default Home;