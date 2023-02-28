class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }


  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let total = 0;
    let currentVamp = this.creator;
    while (currentVamp) {
      currentVamp = currentVamp.creator;
      total++;
    }
    return total;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let targetVamp = vampire;
    
    /**
     * For each node in this current vampire path,
     * compare it with each node in target vampire path
     */

    while (targetVamp) {
      //reset curent vampire path for each item in the taget path
      let currentVamp = this;
      
      while (currentVamp) {
        if (currentVamp.name == targetVamp.name) {
          return currentVamp;
        }
        currentVamp = currentVamp.creator;
      }
      targetVamp = targetVamp.creator;
    }
  }

}

module.exports = Vampire;

