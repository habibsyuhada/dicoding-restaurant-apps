Feature('Like or Unlike Restaurants');

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.wait(3);
  I.seeElement("#posts");
  I.see(`You dont have favorite restaurant.`, "#posts");
});

Scenario("like one restaurant", async ({ I }) => {
  I.amOnPage("/");
  I.wait(3);

  I.seeElement(".post-item");
  I.click(locate(".post-item a").first());
  I.wait(3);

  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.wait(3);

  I.amOnPage("/#/favorite");
  I.wait(3);

  I.seeElement(".post-item");
  I.click(locate(".post-item a").first());
  I.wait(3);

  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.wait(3);

  I.amOnPage("/#/favorite");
  I.wait(3);

  I.see(`You dont have favorite restaurant.`, "#posts");
});

// Scenario("unlike one restaurant", async ({ I }) => {
//   I.amOnPage("/#/favorite");
//   I.wait(3);

//   I.seeElement(".post-item");
//   I.click(locate(".post-item a").first());
//   I.wait(3);

//   I.seeElement("#likeButton");
//   I.click("#likeButton");
//   I.wait(3);

//   I.amOnPage("/#/favorite");
//   I.wait(3);

//   I.see(`You dont have favorite restaurant.`, "#posts");
// });
