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

myLibraryCreator.on('makeFramework', (word) => {
  this.addJS(word); // this is undefined
  console.log(`Your framework name is ${this.frameworkName}`);
});

myLibraryCreator.emit('makeFramework', process.argv[2]);
