'use strict'

import { expect } from 'chai'
import map from './map-recursive'

it('map should be a function', () => {
    expect(map).to.be.an('function')
})

it('map([3 ,2], item) should return [3,2]', () => {
    expect(map([3,2], (item) => item)).to.be.deep.equal([3,2])
})

it('map([3,4], item => + 1, showld return [4, 5]', () => {
    expect(map([3,4], (item) => item + 1)).to.be.deep.equal([4,5])
})

it('map([5,6], item => + 1, showld return [6, 7]', () => {
    expect(map([4,6], (item) => item + 1)).to.be.deep.equal([5,7])
})

it('map([1,2], (item, index) => index, showld return [0, 1]', () => {
    expect(map([3,4], (item, index) => index)).to.be.deep.equal([0,1])
})

it('map([1,2], (item, index, array) => array, showld return [[1, 2], [1,2]]', () => {
    expect(map([1,2], (item, index, array) => array)).to.be.deep.equal([[1,2], [1,2]])
})

it('map() should return []', () => {
    expect(map()).to.deep.equal([])
})