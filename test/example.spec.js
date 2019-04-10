import {assert} from 'chai'
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Example from '../src/example'

const {shallow,mount}=Enzyme

Enzyme.configure({ adapter: new Adapter() })

describe('Enzyme mount的DOM渲染（Full DOM Rendering）中', function () {
    it('Example组件中按钮的名字为子组件Sub中span的值', function () {
        const name='按钮名'
        let app = mount(<Example text={name} />)

        const buttonObj=app.find('button')
        const spanObj=app.find('span')

        console.info(`查找到button的个数：${buttonObj.length}`)
        console.info(`查找到span的个数：${spanObj.length}`)

        assert.equal(buttonObj.text(),spanObj.text())
    })
})