module.exports = {
  "test sample" : function (browser) {
    browser
      .url("http://127.0.0.1:1337")
      .waitForElementVisible('body', 1000)
      .assert.containsText('body', 'Hello World')
      .end();
  }
  "test sample1" : function (google) {
    google
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'rembrandt van rijn')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('ol#rso li:first-child',
        'Rembrandt - Wikipedia')
      .end();
  }
};
