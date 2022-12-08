const TIKTOK = artifacts.require("TikTok");
const { assert, expect } = require("chai");

contract("TikTok", async (accounts) => {
  let tiktok;
  let deployer, user1, user2, users;

  beforeEach(async () => {
    [deployer, user1, user2, ...users] = await accounts;
    tiktok = await TIKTOK.deployed();
  });

  contract("Video Creation", async () => {
    let video = {
      caption: "Hello",
      url: "video.com",
    };
    it("Should Create the Video", async () => {
      let createVideo = await tiktok.createVideo(video.caption, video.url);
      let videoCount = await tiktok.videoCount();
      let videos = await tiktok.videos(videoCount);
      console.log(videos);
      console.log(typeof videoCount);
    });
  });
});
