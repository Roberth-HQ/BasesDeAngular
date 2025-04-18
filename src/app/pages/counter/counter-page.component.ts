import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl:'./counter-page.Component.html',
    styles:`
    button{
        padding: 5px;
        margin: 5px 10px;
        width:75px;
    }
    `,
    //  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent{
    counter=19;
    counterSignal= signal(10); 

    // constructor(){
    //     setInterval(()=>{
    //         this.counterSignal.update(current=> current+1);
    //         console.log("tick");

    //     },2000);
    // }

    increseBy(value:number){
        this.counter+= value;
        this.counterSignal.update(current=> current+value);

    }
    resetCounter(){
        this.counter=0;
        this.counterSignal.set(0);

    }

}