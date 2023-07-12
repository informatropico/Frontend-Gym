const { Route, Switch } = require("react-router");
const { default: Navbar } = require("./components/Navbar");
const { default: Home } = require("./pages/Home");
const { default: About } = require("./pages/About");
const { BrowserRouter } = require("react-router-dom");

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container" style={{ marginTop: 40 }}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;