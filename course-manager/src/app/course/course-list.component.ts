import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [{
            id: 1,
            name: 'Angular DIO',
            imageUrl: '/assets/images/forms.png',
            price: 29.99,
            code: 'XPS-8477',
            duration: 117,
            rating: 4.5,
            relesedate: '18/08/2019'
        },
        {
            id: 2,
            name: 'Spring',
            imageUrl: '/assets/images/http.png',
            price: 40.00,
            code: 'XPS-8478',
            duration: 17,
            rating: 3,
            relesedate: '18/08/2020'
        }
    ];
    }




}