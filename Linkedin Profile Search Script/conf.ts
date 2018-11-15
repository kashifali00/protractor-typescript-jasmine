import {Config, Browser} from "protractor"

export let config : Config = {
framework : "jasmine2",

capabilities : {
     browserName : "chrome",
     chromeOptions: {
        args: ["--test-type", "--no-sandbox"]
      }
},

params: {
  searchKeyword: "Recruiter",
  username: "aairaahmed481@gmail.com",
  password: "testing_123",
  hosts: "https://www.linkedin.com/uas/login?_l=en"

},

specs : ['./e2e/linkedin-profile-search-scrapper.js'],
  directConnect: false,
  baseUrl: '',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 300000,
    print: function() {}
  },

  onPrepare() {
    
 },
}