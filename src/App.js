import './App.css';
import 'fomantic-ui/dist/semantic.min.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="ui scrolling local search">
                    <div className="ui icon input">
                        <form>
                            <label>
                                Name:
                                <input type="text" name="name" />
                            </label>
                            <input type="submit" value="Submit" onSubmit={(e) => {
                                console.log(e.target.value)
                            }}/>
                        </form>
                        <i className="search icon"></i>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
