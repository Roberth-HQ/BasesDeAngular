import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    imports :[UpperCasePipe]
})
export class HeroPageComponent{
    name = signal("iron Man");
    age =signal(45);

    heroDescription= computed(()=>{
        const description=`${this.name()} - ${this.age()}`;
        return description;
    })

    capatilizeName=computed(()=>{
        return `${this.name().toLocaleUpperCase()}`
    })

    getHeroDescription(){
    return `${this.name()} - ${this.age()} +` ;
    }

    changeHero(){
        this.name.set("Spiderman");
        this.age.set(22);
        console.log("hice CLick");
    }
    resetForm(){
        this.name.set("Iron Man");
        this.age.set(45);
    }
    resetEdad(){
        this.age.set(65);
    }

}