import angular from 'angular'

const app = require('./components/app.js')

export default angular.module('pWeb', [])
.component('app', app)