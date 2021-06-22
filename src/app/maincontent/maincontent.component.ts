import { Component, OnInit, Input } from '@angular/core';
import {course} from './course.model';
@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})


export class MaincontentComponent{

  courseList: course[] = [
                    {courseName : 'Lear HTML',        imageSrc : './assets/images/html.png',        level: 'Beginner',     language: 'English', ratings: '2 Star', instructor: 'Mr. Alex',         desc: 'Learn HTML to build static website...readmore'},
                    {courseName : 'Design with CSS3', imageSrc : './assets/images/css.png',         level: 'Beginner',     language: 'Turkish', ratings: '3 Star', instructor: 'Mr. Atif Jillani', desc: 'Learn CSS to design your website...readmore'},
                    {courseName : 'Bootstrap',        imageSrc : './assets/images/bootstrap.jpg',   level: 'Beginner',     language: 'English', ratings: '1 Star', instructor: 'Miss Saba',        desc: 'Learn boostrap to make designing easy...readmore'},
                    {courseName : 'HTML5 & CSS3 crash course', imageSrc: './assets/images/both.png', level: 'Beginner',     language: 'English', ratings: '1 Star', instructor: 'Mr. Arshad',       desc: 'Learn HTML to build static website...readmore'},
                    {courseName : 'Javascript',       imageSrc : './assets/images/js.jpg',          level: 'Intermediate', language: 'English', ratings: '2 Star', instructor: 'Mr. Ehtesham',     desc: 'Learn JavaScript to make you website reactive...readmore'},
                    {courseName : 'React JS',         imageSrc : './assets/images/react.png',       level: 'Intermediate', language: 'English', ratings: '1 Star', instructor: 'Miss Asma',        desc: 'Learn ReactJS for making...readmore'},
                    {courseName : 'Angular JS',       imageSrc : './assets/images/angular.png',     level: 'Intermediate', language: 'English', ratings: '2 Star', instructor: 'Mr Stuart',       desc: 'Learn AgularJS to build one page website...readmore'},
                    {courseName : 'Vue JS',           imageSrc : './assets/images/vue.png',         level: 'Intermediate', language: 'English', ratings: '5 Star', instructor: 'Miss Sara',        desc: 'Learn Vue...readmore'},
                    {courseName : 'Mean Stack',       imageSrc : './assets/images/mean.png',        level: 'Expert',       language: 'English', ratings: '1 Star', instructor: 'Mr. Ahmad',        desc: 'Become a mean stack developer...readmore'},
                    {courseName : 'Full Stack',       imageSrc : './assets/images/fullstack.jpg',   level: 'Expert',       language: 'English', ratings: '4 Star', instructor: 'Miss Tharesa',     desc: 'Became a full stack developer...readmore'}
                  ];

   courseListDisplay: course[] = this.courseList;

  @Input() filterTags = {levelTag : '', languageTag : '', ratingTag : '' };
  // tslint:disable-next-line:typedef
  filteredResult: course[] = [];

  flag: boolean = false;
  validateTags = (): boolean => {
    if ((this.filterTags.levelTag === '') || (this.filterTags.languageTag === '') || (this.filterTags.ratingTag === '')){
      return false;
    }
    else {
       return true;
    }
  }

checkFilterTag = (): any => {
     if (this.filterTags.levelTag !== ''){
       return this.filterTags.levelTag;
     }

     if (this.filterTags.languageTag !== ''){
       return this.filterTags.languageTag;
     }

     if (this.filterTags.ratingTag !== ''){
       return this.filterTags.ratingTag;
     }
  }



filterCourses = (): void => {
    if (this.validateTags()){
      // tslint:disable-next-line:no-shadowed-variable
      for (const cour of this.courseList){
        // tslint:disable-next-line:max-line-length
        if ((cour.level === this.filterTags.levelTag) && (cour.language === this.filterTags.languageTag) && (cour.ratings === this.filterTags.ratingTag)){
          this.filteredResult.push(cour);
          this.flag = true;
          }
       else {
         continue;
        }
      }
    }
    else{
       // tslint:disable-next-line:prefer-const
       let result = this.checkFilterTag();
       for (const cour of this.courseList){
        if ((cour.level === result)){
          this.filteredResult.push(cour);
          this.flag = true;
        }
        if ((cour.language === result)){
          this.filteredResult.push(cour);
          this.flag = true;
        }
        if ((cour.ratings === result)){
          this.filteredResult.push(cour);
          this.flag = true;
        }
       else {
         continue;
        }
    }
  }



    if (this.flag){
    // this.filteredCourse.pop();
    while (this.courseListDisplay.length > 0) {
       this.courseListDisplay.pop();
    }
    // tslint:disable-next-line:forin
    for (const i in this.filteredResult) {
     // tslint:disable-next-line:whitespace
     this.courseListDisplay[i] =(this.filteredResult[i]);
    }

    this.filterTags.levelTag = '';
    this.filterTags.languageTag = '';
    this.filterTags.ratingTag = '';
  }
}


startFiltering = (): void => {
   console.log(this.filterTags);
   this.filterCourses();
}
}
