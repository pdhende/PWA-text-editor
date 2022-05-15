import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Adding content to JATE database!');

  const jateDB = await openDB('jate', 1);

  // Transaction to interact with db for performing operations like read/write
  const jateTransactn = jateDB.transaction('jate', 'readwrite');

  // The object store 'jate' that is created on line 10 is accessed
  const textObj = jateTransactn.objectStore('jate');

  const newText = textObj.add({ value: content });
  const result = await newText;
  console.log("Successfully saved the text!", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  const jateDb = await openDB('jate', 1);
  const jateTransactn = jateDb.transaction('jate', 'readonly');
  const textObj = jateTransactn.objectStore('jate');
  const allText = textObj.getAll();
  const result = await allText;
  console.log('result.value', result);
  return result?.value;
};

initdb();
