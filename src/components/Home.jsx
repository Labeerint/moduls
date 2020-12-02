import {observer} from "mobx-react-lite";
import store from "../store";
import Module from "./Module";

const Home = observer(()=>{
    return(
        <div className="Home">
            <div className="modules">
                {store.activeModules.map(module => <Module key={module}
                                                           module={store.modules[module]}
                />)}
            </div>
        </div>
    )
})

export default Home