Feature("Add Review Restaurant");

Before(({ I }) => {
  I.amOnPage("/");
});

Scenario("Adding Review restaurant", async ({ I }) => {
  const reviewText = "Test Automation Testing E2E";

  I.wait(5);

  I.seeElement(".post-item");
  I.wait(5);

  I.click(locate(".post-item a").first());
  I.wait(5);

  I.seeElement("input[name=name]");
  I.fillField("input[name=name]", "E2E Reviewer");
  I.wait(5);

  I.seeElement("textarea[name=review]");
  I.fillField("textarea[name=review]", reviewText);
  I.wait(5);

  I.seeElement("#btn-review");
  I.wait(5);
  I.click("#btn-review");
});
