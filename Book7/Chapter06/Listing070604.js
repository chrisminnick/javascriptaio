import EventEmitter from 'events';

class javaScriptLibraryCreator extends EventEmitter {
  constructor() {
    super();
    this.frameworkName = '';
  }
  addJS = (word) => {
    this.frameworkName = `${word}.js`;
  };
}

const myLibraryCreator = new javaScriptLibraryCreator();

myLibraryCreator.on('makeFramework', function (word) {
  this.addJS(word);
  console.log(`Your framework name is ${this.frameworkName}`);
});

myLibraryCreator.emit('makeFramework', process.argv[2]);
