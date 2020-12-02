import React from 'react'
import store from "./store";
import {observer} from "mobx-react-lite";

const  Module = observer(({module}) => {
    const [coverage, setCoverage] = React.useState(module.minCov)

    const newCoverage = (e) =>{
        setCoverage(e.target.value)
        let newPrice = e.target.value * module.risk
        store.newPrice(module.id, newPrice)
    }
    const delModule = () =>{
        store.removeModule(module.id)
    }


    return(
        <div className='module'>
            <img className='imgUrl' src={module.img} alt=""/>
            <h2 className="name">{module.name}</h2>
            <span className='risk'>Risk: {module.risk * 100}%</span>
            <span className='coverageTitle'>Coverage: {coverage}</span>
            <input type="range"
                   className='coverageInput'
                   min={module.minCov}
                   max={module.maxCov}
                   value={module.coverage}
                   onChange={(e)=>newCoverage(e)}/>
                   <h3>Price: {module.price.toFixed(2)}</h3>
            <button onClick={()=>delModule()}>Remove module</button>
        </div>
    )
})

export default Module