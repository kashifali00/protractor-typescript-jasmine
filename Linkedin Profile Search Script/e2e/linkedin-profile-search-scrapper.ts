import {browser, element, by, protractor} from "protractor"
const EC = protractor.ExpectedConditions;
let fileContent: string

describe("Linkedin-scrapping", () => {
  beforeAll(() => {
    console.log("Executing Linkedin Scrapping Script")
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
    browser.get(browser.params.hosts);
  })


  it("Linkin scrapping", () => {

    fileContent = "Role,Company Name,Company Profile\n";

    // verify that after click on login button signin page should be appeared
    browser.wait(EC.presenceOf(element(by.id("username"))), 15000, "element not found").then(() => {
      expect(element(by.id("username")).isPresent()).toBeTruthy()
        element(by.id("username")).sendKeys(browser.params.username);
      });

    browser.wait(EC.presenceOf(element(by.id("password"))), 15000, "element not found").then(() => {
      expect(element(by.id("password")).isPresent()).toBeTruthy()
        element(by.id("password")).sendKeys(browser.params.password);
     
    });

    browser.wait(EC.presenceOf(element(by.className("btn__primary--large from__button--floating"))), 15000, "element not found").then(() => {
      console.log("Click sign in button")

      expect(element(by.className("btn__primary--large from__button--floating")).isPresent()).toBeTruthy()

        console.log("Clicking sign in button")

        element(by.className("btn__primary--large from__button--floating")).click().then(() => {
          console.log("Click job button")

          browser.wait(EC.presenceOf(element(by.id("jobs-tab-icon"))), 15000, "element not found").then(() => {
            console.log("Clicking job button")
            expect(element(by.id("jobs-tab-icon")).isPresent()).toBeTruthy()

              element(by.id("jobs-tab-icon")).click().then(() => {
                expect(element(by.css("input[placeholder='Search jobs']")).isPresent()).toBeTruthy()

                  console.log("sending data for search")

                  browser.sleep(5000);
                  element(by.css("input[placeholder='Search jobs']")).sendKeys("recruiters");
                  element(by.css("input[placeholder='Search location']")).sendKeys("Stockholm, Sweden");

                  browser.wait(EC.presenceOf(element(by.className("jobs-search-box__submit-button button-secondary" +
                    "-large-inverse"))), 15000, "element not found").then(() => {

                    element(by.className("jobs-search-box__submit-button button-secondary-large-inverse"))
                      .click().then(() => {
                      console.log("Search button clicked")

                      browser.wait(EC.visibilityOf(element(by.cssContainingText(".jobs-search-dropdown__label.t-12.t-black--light.t-bold.mr2",
                        "Split View"))), 15000, "element not found").then(() => {
                        console.log("Split view found")
                        element(by.cssContainingText(".jobs-search-dropdown__label.t-12.t-black--light.t-bold.mr2",
                          "Split View")).click().then(() => {
                          browser.wait(EC.visibilityOf(element(by.className("jobs-search-dropdown__option-button jobs-search-dropdown__option-button--single"))),
                            15000, "element not found").then(() => {
                            console.log("Classic view button found");
                            element(by.className("jobs-search-dropdown__option-button jobs-search-dropdown__option-button--single"))
                              .click().then(() => {
                              console.log("Clicked on classic view")

                              browser.driver.executeScript('window.scrollTo(0,1000);')
                              browser.sleep(2000);
                              browser.driver.executeScript('window.scrollTo(0,2000);')
                              browser.sleep(2000);
                              browser.driver.executeScript('window.scrollTo(0,3000);')
                              browser.sleep(2000);
                              browser.driver.executeScript('window.scrollTo(0,4000);')
                              browser.sleep(2000);
                              browser.driver.executeScript('window.scrollTo(0,5000);')

                              let pages = element.all(by.css(".page-list > ol > li"))
                              let pageNo = 1;

                              pages.each((listItem, listItemIndex) => {
                                console.log("Index: " + listItemIndex);

                                pages.get(listItemIndex).click().then(() => {
                                  console.log("click page")
                                  browser.driver.executeScript('window.scrollTo(0,1000);')
                                  browser.sleep(2000);
                                  browser.driver.executeScript('window.scrollTo(0,2000);')
                                  browser.sleep(2000);
                                  browser.driver.executeScript('window.scrollTo(0,3000);')
                                  browser.sleep(2000);
                                  browser.driver.executeScript('window.scrollTo(0,4000);')
                                  browser.sleep(2000);
                                  browser.driver.executeScript('window.scrollTo(0,5000);')

                                  browser.driver.executeScript('window.scrollTo(0,6000);').then(function () {
                                    browser.wait(EC.visibilityOf(element(by.className("occludable-update artdeco-list__item p0 ember-view"))),
                                      15000, "element not found").then(() => {

                                      browser.wait(EC.visibilityOf(element(by.className("job-card-search__title artdeco-entity-lockup__title ember-view"))),
                                        15000, "element not found").then(() => {

                                        const navItems = element.all(by.className("occludable-update artdeco-list__item p0 ember-view"));
                                        console.log("Get each row from results");

                                        navItems.count().then(function (count) {
                                          console.log("COUNT ::" + count)
                                        })

                                        navItems.each((row, index) => {
                                          browser.wait(EC.visibilityOf(navItems.get(index).element(by.css(".job-card-search__title.artdeco-entity-lockup__title.ember-view > a"))),
                                            15000, "element not found").then(() => {

                                            navItems.get(index).element(by.css(".job-card-search__title.artdeco-entity-lockup__title.ember-view > a"))
                                              .getText().then(function (searchedRole) {
                                              console.log("searchedRole: " + searchedRole);
                                              fileContent = fileContent.concat(searchedRole, ",");

                                              browser.wait(EC.visibilityOf(navItems.get(index).element(by.css(".job-card-search__company-name.artdeco-entity-lockup__subtitle.ember-view > a"))),
                                                15000, "element not found").then(() => {
                                                console.log("element present ");
                                                navItems.get(index).element(by.className("job-card-search__company-name-link ember-view"))
                                                  .getText().then(function (searchedCompanyName) {
                                                  console.log("searchedCompanyName: " + searchedCompanyName);
                                                  searchedCompanyName = searchedCompanyName.replace(/,/g, ';')
                                                  fileContent = fileContent.concat(searchedCompanyName, ",");
                                                });
                                              });

                                              navItems.get(index).element(by.className("job-card-search__company-name-link ember-view"))
                                                .getAttribute("href").then(function (link) {
                                                console.log("Link: " + link);
                                                fileContent = fileContent.concat(link, "\n");

                                                const fs = require('fs');
                                                console.log("file content: " + fileContent);
                                                fs.writeFileSync('RecruitersInformation.csv', fileContent);
                                              });
                                            });
                                          });
                                        })
                                      });
                                    });
                                  });
                                })
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
            });
          });

    });
  });
});

