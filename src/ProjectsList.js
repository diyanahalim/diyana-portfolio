import img1 from './images/Online Booking Website/1.jpg'
import img2 from './images/Online Booking Website/2.jpg'
import img3 from './images/Online Booking Website/3.jpg'
import img4 from './images/Tuto Website/1.jpg'
import img5 from './images/Tuto Website/2.jpg'
import img6 from './images/Tuto Website/3.jpg'
import img7 from './images/Todo App/1.jpg'
import img8 from './images/Todo App/2.jpg'
import img9 from './images/Todo App/3.jpg'

export const projects = [{
    id: 0,
    project_index: '01',
    // project_image_1: img1,
    // project_image_2: img2,
    // project_image_3: img3,
    project_image: [img1, img2, img3],
    project_title: '01. Online Booking Website',
    project_description: 'A responsive website that was built with ReactJS+node.js. This visually stunning website showcases a breakdown of each treatment along with its price and "Book Now" buttons to direct users to a booking form. The booking data will then be received using Express in Node.js. Some of other features that are included in this online spa booking website are customer reviews, image gallery, contact information and FAQ.'
}, {
    id: 1,
    project_index: '02',
    // project_image_1: img4,
    // project_image_2: img5,
    // project_image_3: img6,
    project_image: [img4, img5, img6],
    project_title: '02. Finding Tutor Website',
    project_description: 'This simple and minimalistic website was built with ReactJS for tutoring business. It acts as a platform to share the list of available tutors with their education and credentials. It also lets the prospective students and families to know what services and subjects the business supports.'
}, {
    id: 3,
    project_index: '03',
    // project_image_1: img7,
    // project_image_2: img8,
    // project_image_3: img9,
    project_image: [img7, img8, img9],
    project_title: '03. Todo List App',
    project_description: 'Just another typical todo-list app but with a nice touch of futuristic design. This app was built with ReactJS and allows users to add tasks, mark tasks as completed, edit or delete task and view the task.'
}];