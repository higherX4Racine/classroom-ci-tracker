function doGet(e) {
    const template = HtmlService.createTemplateFromFile("www/index");
    template.person = new Classes.Identity("Joe", "Smith", 321);
    return template.evaluate();
}