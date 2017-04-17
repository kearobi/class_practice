



class NewDude {
  constructor(){
    this.stacheLength = 0
    this.beardGrunge = 0
    this.pretention = 5
    this.broRate = 5
    this.hipsterClothes = 2
    this.broClothes = 2
  }
  growStache(){
    this.stacheLength += 5
    this.pretention += 7
  }
  growBeard(){
    this.beardGrunge += 5
      if (this.pretention != 0){
        this.pretention -= 5
      }
    }
  istaPost(){
    this.pretention += 10
  }
  buyTank(){
    this.pretention -=5
    this.broRate += 10
    this.broClothes += 1
    if (this.hipsterClothes >= 2) {
        this.hipsterClothes -= 2
      }
    }
  }


class ClassicBro extends NewDude{
  constructor(){
    super()
    this.broClothes = 10
    this.hipsterClothes = 1
    this.broRate = 15
  }
  growStache(){
    this.stacheLength += 2
    this.pretention += 2
    if(this.broRate > 0){
      this.broRate -= 5
    }
  }
  socialCommentary(){
    if (this.broRate >= 10){
      console.log("SUUUP BRAH!")
    }
    if (this.broRate >= 20){
      console.log("BROSIEDON KING OF THE BROCEAN!")
    }
    if (this.pretention >= 10){
      console.log("is it grass fed? and pair well with an IPA?")
    }
  }
}

class Hipster extends NewDude {
    constructor (){
      super()
      this.pretention = 15
      this.stacheLength = 10
      this.hipsterClothes = 10
      this.broClothes = 0
    }

    growStache() {
      this.prention += 10
      this.stacheLength += 3
      this.broRate -= 2
    }
}
