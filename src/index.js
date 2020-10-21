import * as $ from 'jquery'
import Post from '@models/Post'
import './styles/style.css'
import json from './assets/json'
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import Logo from './assets/webpack-logo.png'


const post = new Post("webpack post title", Logo)
$("pre").html(post.toString())
// console.log('post to string', post.toString())

// console.log("this is JSON:", json )
// console.log("this is xml:", xml )
// console.log("this is csv:", csv )