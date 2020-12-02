import React, { Component } from 'react';
import Course from './Course/course'
import './courses.css';

class Courses extends Component {
    state = {
        courses:[{
            id:1,
            image:"https://engineering.fb.com/wp-content/uploads/2016/05/2000px-Python-logo-notext.svg_.png",
            courseName:"Python"
        },{
            id:2,
            image:"https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png",
            courseName:"Javascript"
        },{
            id:3,
            image:"https://cdn.iconscout.com/icon/free/png-512/nodejs-226032.png",
            courseName:"Node.js"
        },{
            id:4,
            image:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
            courseName:"React"
        },{
            id:5,
            image:"https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png",
            courseName:"Angular"
        },{
            id:6,
            image:"https://angular.io/assets/images/logos/angular/angular.png",
            courseName:"Vue.js"
        },{
            id:7,
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/957px-Tensorflow_logo.svg.png",
            courseName:"TensorFlow"
        },{
            id:8,
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1280px-Scikit_learn_logo_small.svg.png",
            courseName:"Scikit-Learn"
        },{
            id:9,
            image:"https://numfocus.org/wp-content/uploads/2016/07/numpy-logo-300.png",
            courseName:"Numpy"
        },{
            id:10,
            image:"https://miro.medium.com/max/390/0*POJPMl2GZ03ROY2D.png",
            courseName:"Pandas"
        },{
            id:11,
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1200px-Keras_logo.svg.png",
            courseName:"Keras"
        },{
            id:12,
            image:"https://icon2.cleanpng.com/20180505/qfe/kisspng-pytorch-recurrent-neural-network-deep-learning-mni-a-floating-5aedd5f7701651.1369063415255362474591.jpg",
            courseName:"PyTorch"
        },{
            id:13,
            image:"https://freefrontend.com/assets/img/anime-js-examples/anime-js-logo-animation.png",
            courseName:"Anime.js"
        },{
            id:14,
            image:"https://www.pinclipart.com/picdir/middle/132-1324682_software-testing-software-testing-icon-png-clipart.png",
            courseName:"Software Testing"
        },{
            id:15,
            image:"https://img.icons8.com/color/452/firebase.png",
            courseName:"Firebase"
        },{
            id:16,
            image:"https://www.chartjs.org/img/chartjs-logo.svg",
            courseName:"Chart.js"
        },{
            id:17,
            image:"https://cdn.iconscout.com/icon/free/png-512/flutter-2038877-1720090.png",
            courseName:"Flutter"
        },{
            id:18,
            image:"https://img.favpng.com/19/0/20/machine-learning-deep-learning-with-python-artificial-intelligence-png-favpng-qFCv7GVnQNDpErJCX6ukpSHLw.jpg",
            courseName:"Machine Learning"
        },{
            id:19,
            image:"https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/ember-512.png",
            courseName:"Ember.js"
        },{
            id:20,
            image:"https://preactjs.com/assets/app-icon.png",
            courseName:"Preact"
        },{
            id:21,
            image:"https://user-images.githubusercontent.com/218949/63261050-6ce11600-c27a-11e9-9355-1ee226b4497c.png",
            courseName:"Svelte"
        },{
            id:22,
            image:"https://expressjs.com/images/express-facebook-share.png",
            courseName:"Express.js"
        },{
            id:23,
            image:"https://cdn.auth0.com/blog/logos/nextjs-logo.png",
            courseName:"Next.js"
        },{
            id:24,
            image:"https://miro.medium.com/max/452/1*QyJFmk0hphz2USthzD4KTw.png",
            courseName:"Gatsby"
        }]
    }

    render(){
        return(
            <div className='Container'>
                <div className='Courses'>
                    <h2>I Want To Learn</h2>
                    <div className = "CourseSection">
                        {this.state.courses.map((course => 
                            <Course id={course.id} image={course.image} courseName={course.courseName}/>
                        ))}
                    </div>
                </div>
            </div>
            
            
        )
    }
}

export default Courses