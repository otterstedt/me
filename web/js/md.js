function run() {
  var text = $('#cv-md').text(),
      target = $('#cv-md-out'),
      converter = new showdown.Converter(),
      html = converter.makeHtml(text);

      //console.log(text);
      console.log(html)

    target.text(html);



}