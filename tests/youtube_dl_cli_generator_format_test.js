import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts";
import {
  youtubeDLCommandForMp3,
  youtubeDLCommandForVideo,
} from "../shared/lib/youtube-dl-cli-generator.js";

Deno.test("assert test framework is working", () => {
  assertEquals(3, 3);
});

Deno.test("youtube-dl for video with url", () => {
  assertEquals(youtubeDLCommandForVideo("test"), "youtube-dl test");
});

Deno.test("youtube-dl for mp3 with url", () => {
  assertEquals(
    youtubeDLCommandForMp3("test"),
    "youtube-dl --extract-audio --audio-format mp3 test"
  );
});
