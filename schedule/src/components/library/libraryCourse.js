import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus neque non velit lobortis efficitur. Proin aliquam, risus quis interdum scelerisque, elit dui fringilla nibh, sit amet pulvinar quam velit sit amet risus.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;