import Nav from "./Nav"
// import "./login.css"

const Home = () => {
    return (
        <>
            <Nav/>
            <form>
      <div class="form-field" id="form-field-user">
        <input type="text" id="" placeholder="Username" required />
      </div>

      <div class="form-field" id="form-field-pwd">
        <input type="password" placeholder="Password" required />
      </div>

      <div class="form-field" id="form-field-btn">
        <button
          onclick="location.href='./signup.html'"
          class="btn2"
          id="createAccount"
          type="submit"
        >
          Signup
        </button>
        <button class="btn" id="submit" type="submit">Login</button>
      </div>
    </form>
        </>
    )
};

export default Home;