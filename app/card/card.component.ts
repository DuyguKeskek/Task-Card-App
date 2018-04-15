import { Component, Input } from '@angular/core';

import { Task } from '../model/task';

@Component({
    moduleId: module.id, //no need to define the path ./ for templateUrl
    selector: 'app-card', //html tag
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css']
})

export class CardComponent { 
    @Input() task: Task; // pass data into card comp. using input property
}