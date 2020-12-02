import React from 'react'
import store from "../store";
import {observer} from "mobx-react-lite";
import {Button, Card, Modal} from "antd";

const  Module = observer(({module}) => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const coverage = React.createRef()
    const addModule = () =>{
        let newModule = {...module}
        store.addToCart(newModule)
    }

    const newCoverage = () =>{
        store.newInfo(coverage.current.value, module.id)

    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return(<div>
            <Card title={module.name} style={{ width: 300 }}>
                <img className='imgUrl' src={module.img} alt=""/>
                <h4 className='risk'>Risk: {module.risk * 100}%</h4>
                <h4 className='coverageTitle'>Coverage: {module.currentCov}</h4>
                <Button onClick={showModal}>Select Coverage</Button>
            </Card>
            <Modal
                title="Select Coverage"
                visible={isModalVisible}
                onOk={addModule}
                onCancel={handleCancel}
            >
                <h4 className='coverageTitle'>Coverage: {module.currentCov}</h4>
                <input type="range"
                       ref={coverage}
                       className='coverageInput'
                       min={module.minCov}
                       max={module.maxCov}
                       value={module.coverage}
                       onChange={newCoverage}/>
                <h3>Price: {module.price.toFixed(2)}</h3>
            </Modal>
        </div>

    )
})

export default Module