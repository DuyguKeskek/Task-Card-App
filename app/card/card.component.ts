import { Component } from '@angular/core';

@Component({
    moduleId: module.id, //no need to define the path ./ for templateUrl
    selector: 'app-card', //html tag
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css']
})

export class CardComponent { }