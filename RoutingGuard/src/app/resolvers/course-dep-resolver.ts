import { CourseService } from './course.service';
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { Course } from "./course";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CourseDepResolver implements Resolve<Course> {

    constructor(private courseService: CourseService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Course> {
        return this.courseService.getCourseById(route.paramMap.get('id')) as Course;
    }

}