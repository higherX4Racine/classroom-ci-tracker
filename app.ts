function doGet(e) {
    const template = HtmlService.createTemplateFromFile("www/index");
    template.person = new Identity("Joe", "Smith", 321);
    return template.evaluate();
}