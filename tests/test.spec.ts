import { test, expect } from "@playwright/test";

const captures = "./captures/";
test("キャプチャ取る", async ({ page }) => {
  // ページ指定
  await page.goto("https://ecofurni-jp.com/");
  // 表示を待つ
  await page.waitForURL("https://ecofurni-jp.com/");
  //表示中の画面のスクリーンショットをとる
  await page.screenshot({ path: `${captures}top.png` });
  //表示中の画面の全体のスクリーンショットをとる場合
  await page.screenshot({ path: `${captures}top_full.png`, fullPage: true });
});
