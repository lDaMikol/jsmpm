/**
 * Organize a page object structure of any app you want:
 * 1. Base page should be created
 * 2. At least one of the child pages should be inherited from the page
 * 3. Create a simple walk through scenarios using the described elements (how it was done on the sessions for Login functionality)
 */
class PageBlock {
    constructor(element) {
        this.element = element;
    }
 
    viewBlock() {
        return `I have viewed = ${this.element}`;
    }
}
 
class Page { 
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
 
    viewBaseUrl() {
        return `My base url = ${this.baseUrl}`;
    }
 
    get home() {
        return new PageBlock('home');
    }
 
    get trending() {
        return new PageBlock('trending');
    }
 
    get subscriptions() {
        return new PageBlock('subscriptions');
    }
 
    open() {
        return `I have navigated to ${this.baseUrl}${this.path}`  
    }
}
 
 
 
let page = new Page('www.youtube.com');
console.log(page.home);
console.log(page.viewBaseUrl());
 
 
class UploadPage extends Page {
    constructor(baseUrl, path){
        super(baseUrl);
        this.path = path;
    }
 
    get uploadButton() {
        return `Upload Button`;
    }
 
    get selectFilesButton() {
        return `Select Files Button`;
    }
 
    get videoTitleField() {
        return `Video Title Field`;
    }
 
    get videoDescriptionField() {
        return `Video Description Field`;
    }
 
    clickUpload() {
        return `I have clicked ${this.uploadButton}`;
    }
 
    clickSelectFilesButton() {
        return `I have clicked ${this.selectFilesButton}`;
    }
 
    typeVideoTitle(text) {
        return `I have typed \'${text}\' into ${this.videoTitleField}`;
    }
 
    typeVideoDescription(text) {
        return `I have typed \'${text}\' into ${this.videoDescriptionField}`;
    }
}
 
let uploadPage = new UploadPage('www.youtube.com', '/channel/videos/upload');
 
console.log(uploadPage);
console.log(uploadPage.viewBaseUrl());
console.log(uploadPage.open());
console.log(uploadPage.home.viewBlock());
console.log(uploadPage.trending.viewBlock());
console.log(uploadPage.subscriptions.viewBlock());
console.log(uploadPage.typeVideoTitle('My new minecraft gameplay (GONE WRONG!!!)'));
console.log(uploadPage.typeVideoDescription('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'));
console.log(uploadPage.clickUpload());