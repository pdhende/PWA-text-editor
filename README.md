# PWA Text Editor

## Table of contents
* [Description](#description)
* [Screenshots](#screenshots)
* [Built with](#built-with)
* [How it works](#how-it-works)
* [License](#license)

## Description
  The PWA(Progressive Web Applications) Text Editor is a very handy tool to create notes and code snippets with or without internet connection.
  
## Screenshots

![image](https://user-images.githubusercontent.com/65467469/168459024-4e1133ee-7bb6-4779-9e90-10dd084980bd.png)


## Built with
This application is built using :
* JavaScript
* Progressive Web Application
* Webpack
* Service Workers
* IndexedDB

## How it works
1.	Open URL of the application : 
    * https://pwatext-edit.herokuapp.com
    * An application page with a  header and an Install button is displayed.
    * A Manifest file is created and the Service Worker is registered.
2.	Enter a note or a code snippet
3.	Click outside the application.
    * The note/snippet will be saved to the indexed DB
4.	Reload application
    * The saved note/snippet should be displayed in the editor.
5.	When I click on the ‘Install’ button.
    *	A prompt for installing the application is displayed.
6.	Click Install.
    * The app can be used offline. 
    * The saved notes/ snippets are available in the app online or offline too

## License
 This application is licensed under the [MIT]( https://github.com/pdhende/PWA-text-editor/blob/main/LICENSE) license.
