export class code {
    one : number
    two : number
    three : number
    four : number

    get_radom(): number {
        return Math.floor(Math.random() * 9) + 1;
    }
    toString() :string{
        return`${ this.one}${this.two}${this.three}${this.three}`
    }
    
    start():void{
        this.one = this.get_radom()
        this.two = this.get_radom()
        this.three = this.get_radom()
        this.four = this.get_radom()
    }
}