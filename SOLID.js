// Factory function
/* In JavaScript, any function can return a new object. When it’s not a 
constructor function or class, it’s called a factory function */


/**
 * S.O.L.I.D. STANDS FOR:
    S — Single responsibility principle (SRP)
    O — Open closed principle
    L — Liskov substitution principle
    I — Interface segregation principle
    D — Dependency Inversion principle
*/

/**
 *  Single responsibility principle
 * A module should be responsible for only one actor. As a consequence, it has only one reason to change
 */

// BAD example
class TodoList {
  constructor() {
    this.items = []
  }

  addItem(text) {
    this.items.push(text)
  }

  removeItem(index) {
    this.items = items.splice(index, 1)
  }

  toString() {
    return this.items.toString()
  }

  save(filename) {
    fs.writeFileSync(filename, this.toString())
  }

  load(filename) {
    // Some implementation
  }
}

// SRP example
class TodoList {
  constructor() {
    this.items = []
  }

  addItem(text) {
    this.items.push(text)
  }

  removeItem(index) {
    this.items = items.splice(index, 1)
  }

  toString() {
    return this.items.toString()
  }
}
class DatabaseManager {
  saveToFile(data, filename) {
    fs.writeFileSync(filename, data.toString())
  }

  loadFromFile(filename) {
    // Some implementation
  }
}
/**
 * Open-closed Principle
 * Modules should be open for extension but closed for modification
 */

// BaD example
class Coder {
  constructor(fullName, language, hobby, education, workplace, position) {
    this.fullName = fullName
    this.language = language
    this.hobby = hobby
    this.education = education
    this.workplace = workplace
    this.position = position
  }
}

class CoderFilter {
  filterByName(coders, fullName) {
    return coders.filter(coder => coder.fullName === fullName)
  }

  filterBySize(coders, language) {
    return coders.filter(coder => coder.language === language)
  }

  filterByHobby(coders, hobby) {
    return coders.filter(coder => coder.hobby === hobby)
  }
}
//  GOOD example
const filterByProp = (array, propName, value) =>
  array.filter(element => element[propName] === value)

/**
 * Liskov substitution principle
 * If you have a function, that works for a base type, it should work for a derived type
 */

// Bad example
class Rectangle {
  constructor(width, height) {
    this._width = width
    this._height = height
  }

  get width() {
    return this._width
  }
  get height() {
    return this._height
  }

  set width(value) {
    this._width = value
  }
  set height(value) {
    this._height = value
  }

  getArea() {
    return this._width * this._height
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size)
  }
}

const square = new Square(2)
square.width = 3
console.log(square.getArea())

// Good
class Square extends Rectangle {
  constructor(size) {
    super(size, size)
  }

  set width(value) {
    this._width = this._height = value
  }

  set height(value) {
    this._width = this._height = value
  }
}

/**
 * Interface segregation principle
 * Clients should not be forced to depend upon interfaces that they do not use
 */

// Bad
class Phone {
  constructor() {
    if (this.constructor.name === 'Phone')
      throw new Error('Phone class is absctract')
  }

  call(number) {}

  takePhoto() {}

  connectToWifi() {}
}

class IPhone extends Phone {
  call(number) {
    // Implementation
  }

  takePhoto() {
    // Implementation
  }

  connectToWifi() {
    // Implementation
  }
}

class Nokia3310 extends Phone {
  call(number) {
    // Implementation
  }

  takePhoto() {
    // Argh, I don't have a camera
  }

  connectToWifi() {
    // Argh, I don't know what wifi is
  }
}

/**
 * Dependency inversion principle
 * High-level modules should not depend on low-level modules
 */

// bad
class FileSystem {
  writeToFile(data) {
    // Implementation
  }
}

class ExternalDB {
  writeToDatabase(data) {
    // Implementation
  }
}

class LocalPersistance {
  push(data) {
    // Implementation
  }
}

class PersistanceManager {
  saveData(db, data) {
    if (db instanceof FileSystem) {
      db.writeToFile(data)
    }

    if (db instanceof ExternalDB) {
      db.writeToDatabase(data)
    }

    if (db instanceof LocalPersistance) {
      db.push(data)
    }
  }
}

// Good
class FileSystem {
  save(data) {
    // Implementation
  }
}

class ExternalDB {
  save(data) {
    // Implementation
  }
}

class LocalPersistance {
  save(data) {
    // Implementation
  }
}

class PersistanceManager {
  saveData(db, data) {
    db.save(data)
  }
}